package ru.itmo.json_forms.core.schema

import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonObject

class Schema(rawSchema: JsonObject) {
    val root: DataType

    init {
        root = parseDataType(rawSchema)
    }

    override fun toString(): String {
        return root.toString()
    }
}

private fun parseDataType(obj: JsonObject): DataType {
    return when(obj["type"].toString()) {
        "string" -> StringType()
        "number" -> NumberType()
        "integer" -> IntegerType()
        "boolean" -> BooleanType()
        "null" -> NullType()
        "object" -> parseObjectType(obj)
        "array" -> UnknownType()
        else ->
            if (obj.containsKey("properties")) {
                parseObjectType(obj)
            } else {
                UnknownType()
            }
    }
}

private fun parseObjectType(obj: JsonObject): ObjectType {
    val properties = mutableMapOf<String, DataType>()
    obj["properties"]?.jsonObject?.entries?.forEach {
        it.value.jsonObject.let { value -> properties[it.key] = parseDataType(value) }
    }
    return ObjectType(properties)
}
