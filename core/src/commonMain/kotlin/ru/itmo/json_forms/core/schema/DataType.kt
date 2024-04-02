package ru.itmo.json_forms.core.schema

abstract class DataType

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

data class ObjectType(val properties: Map<String, DataType>) : DataType()
data class ArrayType(val prefixItems: List<DataType>, val items: DataType) : DataType()

data class EnumType(val set: Set<DataType>) : DataType()
