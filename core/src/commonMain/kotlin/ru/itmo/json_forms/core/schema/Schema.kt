package ru.itmo.json_forms.core.schema

import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonObject

class Schema(rawSchema: JsonObject) {
    val root: DataType = parseDataType(rawSchema)

    override fun toString(): String {
        return visit(0, root)
    }
}

private fun parseDataType(obj: JsonObject): DataType {
    return when(obj["type"].toString().removeSurrounding("\"")) {
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
        .withTitle(obj["title"]?.toString())
        .withDescription(obj["description"]?.toString())
}

private fun parseObjectType(obj: JsonObject): ObjectType {
    val properties = mutableMapOf<String, DataType>()
    obj["properties"]?.jsonObject?.entries?.forEach {
        it.value.jsonObject.let { value -> properties[it.key] = parseDataType(value) }
    }
    return ObjectType(properties)
}

private fun visit(depth: Int, type: DataType): String {
    fun indent(str: String) = str.prependIndent("  ".repeat(depth))
    var res = ""
    type.title?.let {
        res += indent("title = $it") + "\n"
    }
    type.description?.let {
        res += indent("description = $it") + "\n"
    }
    res += when(type) {
        is BasicType -> indent("type = $type")
        is ObjectType -> type.properties.toList().joinToString("\n") {
            indent(it.first) + ":\n" + visit(depth + 1, it.second)
        }
        is ArrayType -> indent("Array<${visit(0, type.items)}>")
        else -> ""
    }
    return res
}
