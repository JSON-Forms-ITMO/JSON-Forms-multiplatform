package ru.itmo.hson_forms.intellij.ui

import com.intellij.icons.AllIcons
import com.intellij.ide.plugins.newui.ListPluginComponent.ButtonAnAction
import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.diagnostic.thisLogger
import com.intellij.openapi.fileEditor.FileDocumentManager
import com.intellij.openapi.observable.properties.AtomicBooleanProperty
import com.intellij.openapi.observable.properties.AtomicProperty
import com.intellij.openapi.observable.util.bind
import com.intellij.openapi.ui.ComboBox
import com.intellij.openapi.ui.popup.JBPopupFactory
import com.intellij.psi.PsiFile
import com.intellij.ui.HyperlinkLabel
import com.intellij.ui.components.JBCheckBox
import com.intellij.ui.components.JBLabel
import com.intellij.ui.components.JBTextField
import com.intellij.ui.dsl.builder.AlignX
import com.intellij.ui.dsl.builder.Panel
import com.intellij.ui.dsl.builder.RightGap
import com.intellij.ui.dsl.builder.panel
import com.intellij.util.ui.JBUI
import ru.itmo.json_forms.core.document.*
import java.awt.BorderLayout
import java.util.concurrent.atomic.AtomicBoolean
import javax.swing.JButton
import javax.swing.JComponent
import javax.swing.JPanel

class JsonEditorComponent(
    private val file: PsiFile,
    private val schema: String,
) : JPanel(BorderLayout()) {
    private val logger = thisLogger()
    private val updateLock = AtomicBoolean(false)

    init {
        updateUi(file.text)
        border = JBUI.Borders.empty(15)
    }

    private fun updateUi() {
        updateUi(file.text)
    }

    fun updateUi(json: String) {
        if (updateLock.getAndSet(false)) {
            // UI triggered this update, skip
            return
        }

        val component = try {
            val jsonTree = JsonTreeBuilder.build(json, schema)
            val onJsonUiChanged = fun() {
                updateLock.set(true)
                val newJson = jsonTree.getJson()
                updateFile(newJson)
            }

            UiBuilder(onJsonUiChanged).visitDocument(jsonTree)
        } catch (e: Exception) {
            logger.info(e)
            return
        }

        removeAll()
        add(component, BorderLayout.NORTH)
    }

    private fun updateFile(newContent: String) {
        if (!file.virtualFile.isWritable) {
            return // todo: disable UI editing when file is read only
        }

        val application = ApplicationManager.getApplication()
        application.invokeLater {
            val fileDocumentManager = FileDocumentManager.getInstance()
            val jsonDocument = fileDocumentManager.getDocument(file.virtualFile)

            if (jsonDocument == null) {
                logger.error("can't find document for file")
                return@invokeLater
            }

            application.runWriteAction {
                jsonDocument.setText(newContent)
                fileDocumentManager.saveDocument(jsonDocument)
            }
        }

    }

    @Suppress("UnstableApiUsage")
    inner class UiBuilder(
        private val onJsonChangeRequested: () -> Unit,
    ) : DocumentVisitor<JComponent> {
        override fun visitNull(element: NullElement): JComponent {
            return JBLabel("<null-element> ${element.value}")
        }

        override fun visitString(element: StringElement): JComponent = getSimpleField(element)

        override fun visitNumber(element: NumberElement): JComponent = getSimpleField(element)

        override fun visitInteger(element: IntegerElement): JComponent = getSimpleField(element)

        private fun getSimpleField(element: BasicElement<*>): JComponent {
            val property = element.getProperty()
            return JBTextField(element.value).bind(property)
        }

        override fun visitBoolean(element: BooleanElement): JComponent {
            val property = element.getProperty().asBoolProperty()
            return JBCheckBox(element.type.title).bind(property)
        }

        override fun visitEnum(element: EnumElement): JComponent {
            val property = element.getProperty()
            val values = element.type.values.toList()

            return ComboBox(EnumModel(values, property))
        }

        override fun visitObject(element: ObjectElement): JComponent {
            return panel {
                val title = element.type.title

                group(title, false) {
                    for ((lbl, property) in element.getProperties()) {
                        row(lbl) {
                            this.cell(visit(property))
                                .comment(property.type.description)
                                .align(AlignX.FILL)
                            resizableRow()
                        }

                        align(AlignX.FILL)
                        resizableColumn()
                    }

                    val existingProperties = element.getProperties().map { it.key }.toString()
                    val missingProperties = element.type.properties.filter { it.key !in existingProperties }

                    if (missingProperties.isNotEmpty()) {
                        row {
                            val button = JButton(AllIcons.Actions.AddList)
                            cell(button)
                            button.addActionListener {
                                val popupFactory = JBPopupFactory.getInstance()
                                val popup = popupFactory
                                    .createPopupChooserBuilder(missingProperties.map { it.key })
                                    .setItemChosenCallback { name ->
                                        element.addProperty(name, missingProperties[name]!!)
                                        onJsonChangeRequested()
                                        updateUi()
                                    }
                                    .createPopup()

                                popup.showUnderneathOf(button)
                            }
                        }
                    }

                    align(AlignX.FILL)
                    resizableColumn()
                }.resizableRow()

                align(AlignX.FILL)
                resizableColumn()
            }
        }

        // TODO: Write or find an editable a-like combobox element
        override fun visitArray(element: ArrayElement): JComponent = panel {
            group {
                for (item in element.items()) {
                    removableCell(item, element)
                }

                row {
                    val button = HyperlinkLabel("add...").apply {
                        this.addHyperlinkListener {
                            element.addItem()
                            onJsonChangeRequested()
                            updateUi()
                        }
                    }

                    cell(button)
                }
            }
        }

        private fun Panel.removableCell(
            item: Element<*>,
            parent: ArrayElement,
        ) {
            row {
                this.cell(visit(item)).align(AlignX.FILL).gap(RightGap.SMALL)

                val button = ButtonAnAction.create(AllIcons.Actions.Cancel) {
                    parent.removeItem(item)
                    onJsonChangeRequested()
                    this@row.visible(false)
                }

                actionButton(button)
            }
        }

        override fun visitOptional(element: OptionalElement): JComponent {
            val trueElement = element.get()
            if (trueElement != null) {
                return visit(trueElement)
            }

            return HyperlinkLabel("add...").apply {
                this.addHyperlinkListener {
                    element.put()
                    onJsonChangeRequested()
                    updateUi()
                }
            }
        }

        override fun visitUnresolved(element: UnresolvedElement): JComponent {
            return JBLabel("<unresolved-element> ${element.type}")
        }

        private fun BasicElement<*>.getProperty(): AtomicProperty<String> {
            val property = AtomicProperty(this.value ?: "")
            property.afterChange { value ->
                this.value = value
                onJsonChangeRequested()
            }

            return property
        }

        private fun AtomicProperty<String>.asBoolProperty(): AtomicBooleanProperty {
            val trueConst = "true"
            val property = AtomicBooleanProperty(this.get() == trueConst)

            property.afterChange { value ->
                this.set(value.toString())
                onJsonChangeRequested()
            }

            return property
        }
    }
}
