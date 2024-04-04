package ru.itmo.hson_forms.intellij.ui

import com.intellij.openapi.application.Application
import com.intellij.openapi.application.ApplicationManager
import com.intellij.openapi.diagnostic.logger
import com.intellij.openapi.diagnostic.thisLogger
import com.intellij.openapi.fileEditor.FileDocumentManager
import com.intellij.openapi.observable.properties.AtomicBooleanProperty
import com.intellij.openapi.observable.properties.AtomicProperty
import com.intellij.openapi.observable.util.bind
import com.intellij.openapi.ui.ComboBox
import com.intellij.psi.PsiFile
import com.intellij.psi.PsiManager
import com.intellij.ui.components.JBCheckBox
import com.intellij.ui.components.JBLabel
import com.intellij.ui.components.JBTextField
import com.intellij.ui.dsl.builder.AlignX
import com.intellij.ui.dsl.builder.panel
import com.jetbrains.rd.util.remove
import ru.itmo.json_forms.core.document.*
import javax.swing.JComponent
import javax.swing.JPanel

class JsonEditorComponent(
    private val file: PsiFile,
    private val schema: String,
) : JPanel() {
    private val logger = thisLogger()

    init {
        updateUi()
    }

    fun updateUi() {
        val component = try {
            val json = file.text
            val jsonTree = JsonTreeBuilder.build(json, schema)
            val onJsonUiChanged = fun() {
                val newJson = jsonTree.getJson()
                updateFile(newJson)
            }

            UiBuilder(onJsonUiChanged).visitDocument(jsonTree)
        } catch (_: Exception) {
            return
        }

        removeAll()
        add(component)
    }

    private fun updateFile(newContent: String) {
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

                val psiManager = PsiManager.getInstance(file.project)
                psiManager.reloadFromDisk(file)
            }
        }

    }

    @Suppress("UnstableApiUsage")
    class UiBuilder(
        private val onJsonChangeRequested: () -> Unit
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
                        }
                    }
                }
            }
        }

        // TODO: Write or find an editable a-like combobox element
        override fun visitArray(element: ArrayElement): JComponent = panel {
            group {
                row {
                    button("+") { }
                }

                for (item in element.items()) {
                    row {
                        this.cell(visit(item))
                        button("-") { element.items().remove(item) }
                    }
                }
            }
        }

        override fun visitOptional(element: OptionalElement): JComponent {
            val trueElement = element.get() ?: return JBLabel("<optional-element> ${element.get()}")
            return visit(trueElement)
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
            this.afterChange { value ->
                property.set(value == trueConst)
            }
            property.afterChange { value ->
                this.set(value.toString())
                onJsonChangeRequested()
            }

            return property
        }
    }
}
