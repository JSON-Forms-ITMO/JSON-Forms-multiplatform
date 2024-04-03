package ru.itmo.hson_forms.intellij

import com.intellij.openapi.ui.ComboBox
import com.intellij.psi.PsiFile
import com.intellij.ui.components.JBCheckBox
import com.intellij.ui.components.JBLabel
import com.intellij.ui.components.JBTextField
import com.intellij.ui.dsl.builder.panel
import com.jetbrains.rd.util.remove
import ru.itmo.json_forms.core.document.*
import javax.swing.JComponent
import javax.swing.JPanel

class JsonEditorComponent(
    private val file: PsiFile,
    private val schema: String,
) : JPanel() {
    init {
        updateUi()
    }

    fun updateUi() {
        val component = try {
            val json = file.text
            val jsonTree = JsonTreeBuilder.build(json, schema)
            UiBuilder().visitDocument(jsonTree)
        } catch (_: Exception) {
            return
        }

        removeAll()
        add(component)
    }

    class UiBuilder : DocumentVisitor<JComponent> {
        override fun visitNull(element: NullElement): JComponent {
            return JBLabel("<null-element> ${element.value}")
        }

        override fun visitString(element: StringElement): JComponent =
            JBTextField(element.value)

        override fun visitNumber(element: NumberElement): JComponent =
            JBTextField(element.value)

        override fun visitInteger(element: IntegerElement): JComponent =
            JBTextField(element.value)

        override fun visitBoolean(element: BooleanElement): JComponent {
            val value = element.value == "true"
            return JBCheckBox(element.type.title, value)
        }

        override fun visitEnum(element: EnumElement): JComponent =
            ComboBox(element.type.values)

        override fun visitObject(element: ObjectElement): JComponent {
            return panel {
                val title = element.type.title

                group(title, false) {
                    for ((lbl, property) in element.getProperties()) {
                        row(lbl) {
                            this.cell(visit(property))
                                .comment(property.type.description)
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
    }
}
