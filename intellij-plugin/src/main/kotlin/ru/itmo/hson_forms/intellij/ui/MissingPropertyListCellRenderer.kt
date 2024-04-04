package ru.itmo.hson_forms.intellij.ui

import ru.itmo.json_forms.core.schema.DataType
import java.awt.Component
import javax.swing.JList
import javax.swing.ListCellRenderer
import javax.swing.plaf.basic.BasicComboBoxRenderer

class MissingPropertyListCellRenderer(
    private val missingProperties: Map<String, DataType>
) : BasicComboBoxRenderer() {
}
