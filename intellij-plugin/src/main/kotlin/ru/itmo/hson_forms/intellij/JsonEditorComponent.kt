package ru.itmo.hson_forms.intellij

import com.intellij.psi.PsiFile
import com.intellij.ui.components.JBLabel
import com.intellij.ui.dsl.builder.panel
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
            return JBLabel("<number-element> ${element.value}")
        }

        override fun visitString(element: StringElement): JComponent {
            return JBLabel("<number-element> ${element.value}")
        }

        override fun visitNumber(element: NumberElement): JComponent {
            return JBLabel("<number-element> ${element.value}")
        }

        override fun visitInteger(element: IntegerElement): JComponent {
            return JBLabel("<integer-element> ${element.value}")
        }

        override fun visitBoolean(element: BooleanElement): JComponent {
            return JBLabel("<bool-element> ${element.value}")
        }

        override fun visitEnum(element: EnumElement): JComponent {
            return JBLabel("<enum-element> ${element.value}")
        }

        override fun visitObject(element: ObjectElement): JComponent {
            return panel {
                row {
                    label("Object")
                }

                for ((lbl, property) in element.getProperties()) {
                    row(lbl) {
                        this.cell(visit(property))
                    }
                }
            }
        }

        override fun visitArray(element: ArrayElement): JComponent {
            return JBLabel("<array-element>")
        }

        override fun visitOptional(element: OptionalElement): JComponent {
            return JBLabel("<optional-element> ${element.get()}")
        }

        override fun visitUnresolved(element: UnresolvedElement): JComponent {
            return JBLabel("<unresolved-element> ${element.type}")
        }

    }
}
