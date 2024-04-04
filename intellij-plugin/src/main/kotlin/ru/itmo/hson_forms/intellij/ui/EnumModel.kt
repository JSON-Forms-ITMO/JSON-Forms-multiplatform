package ru.itmo.hson_forms.intellij.ui

import com.intellij.openapi.observable.properties.AtomicProperty
import org.jdesktop.swingx.combobox.ListComboBoxModel

class EnumModel(
    elements: List<String>,
    private val property: AtomicProperty<String>
) : ListComboBoxModel<String>(elements) {
    override fun getSelectedItem(): String {
        return property.get()
    }

    override fun setSelectedItem(item: Any) {
        super.setSelectedItem(item)
        property.set(item as String)
    }
}
