package ru.itmo.json_forms.core.schema

abstract class DataType {
    var title: String? = null
    var description: String? = null
    var defaultValue: String? = null

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

abstract class BasicType : DataType() { // because data classes require at least 1 parameter
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

class UnknownType : BasicType()

class NullType : BasicType()
class StringType : BasicType()
class NumberType : BasicType()
class IntegerType : BasicType()
class BooleanType : BasicType()

data class OptionalType(val type: DataType) : BasicType() {
    override fun toString() = "$type?"
}
data class VariantType(val tags: List<DataType>) : BasicType() {
    override fun toString() = super.toString() + "[ " + tags.joinToString(" | ") + " ]"
}
data class EnumType(val values: List<String>) : BasicType() {
    override fun toString() = super.toString() + "[ " + values.joinToString(" | ") + " ]"
}

data class ObjectType(val properties: Map<String, DataType>) : DataType() {
    override fun toString() = this::class.simpleName!!
}
data class ArrayType(val prefixItems: List<DataType>, val items: DataType) : DataType() {
    override fun toString() = this::class.simpleName!!
}

