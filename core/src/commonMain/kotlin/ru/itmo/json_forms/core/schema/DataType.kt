package ru.itmo.json_forms.core.schema

import ru.itmo.json_forms.core.ir.JMap
import ru.itmo.json_forms.core.ir.toJMap
import ru.itmo.json_forms.core.utils.Utils
import kotlin.js.JsExport

@JsExport
sealed class DataType {
    var title: String? = null
    var description: String? = null
    var defaultValue: String? = null
    val uniqId: String = Utils.generateUUID()

    fun withTitle(title: String?): DataType {
        this.title = title
        return this
    }

    fun withDescription(description: String?): DataType {
        this.description = description
        return this
    }

    fun withDefaultValue(defaultValue: String?): DataType {
        this.defaultValue = defaultValue
        return this
    }
}

@JsExport
sealed class BasicType : DataType() { // because data classes require at least 1 parameter
    override fun equals(other: Any?): Boolean {
        return if (other == null) {
            false
        } else {
            this::class == other::class
        }
    }
    override fun hashCode() = this::class.hashCode()
    override fun toString() = this::class.simpleName!!
}

@JsExport
class UnknownType : BasicType()

@JsExport
class NullType : BasicType()

@JsExport
class StringType : BasicType()

@JsExport
class NumberType : BasicType()

@JsExport
class IntegerType : BasicType()

@JsExport
class BooleanType : BasicType()

@JsExport
class VariantType(val tags: Array<DataType>) : BasicType() {
    override fun toString() = super.toString() + "[ " + tags.joinToString(" | ") + " ]"
}

@JsExport
class EnumType(val values: Array<String>) : BasicType() {
    override fun toString() = super.toString() + "[ " + values.joinToString(" | ") + " ]"
}

@JsExport
class OptionalType(val someType: DataType) : DataType() {
    override fun toString() = "$someType?"
}

@JsExport
class ObjectType(val properties: JMap<String, DataType>, val required: Array<String>) : DataType() {
    val optionalProperties = properties.filterNot { required.contains(it.key) }.toJMap()
    val requiredProperties = properties.filter { required.contains(it.key) }.toJMap()
    override fun toString() = this::class.simpleName!!
}

@JsExport
data class ArrayType(val prefixItems: Array<DataType>, val items: DataType) : DataType() {
    override fun toString() = this::class.simpleName!!
}
