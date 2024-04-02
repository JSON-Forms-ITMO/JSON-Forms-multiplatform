package ru.itmo.json_forms.core.schema

interface DataType

data class NullType(private val value: Nothing? = null) : DataType

data class StringType(val name: String) : DataType
data class NumberType(val name: String) : DataType
data class IntegerType(val name: String) : DataType
data class BooleanType(val name: String) : DataType

data class ObjectType(val properties: Map<String, DataType>)
data class ArrayType(val prefixItems: List<DataType>, val items: DataType) : DataType

data class EnumType(val set: Set<DataType>) : DataType
