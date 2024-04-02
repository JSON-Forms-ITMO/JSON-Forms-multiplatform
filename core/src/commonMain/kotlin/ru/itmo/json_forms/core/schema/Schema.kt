package ru.itmo.json_forms.core.schema

import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonArray
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
        "array" -> parseArrayType(obj)
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

private fun parseArrayType(obj: JsonObject): ArrayType {
    val items = obj["items"]?.let { parseDataType(it.jsonObject) }
    val prefixItems = mutableListOf<DataType>()
    obj["prefixItems"]?.jsonArray?.forEach {
        it.jsonObject.let { prefix -> prefixItems.add(parseDataType(prefix)) }
    }
    return ArrayType(prefixItems, items ?: UnknownType())
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
        is ArrayType -> {
            indent("type = [") + "\n" +
            type.prefixItems.toList().joinToString("\n") {
                visit(depth + 1, it)
            } +
            visit(depth + 1, type.items) + "..." +
            indent("\n]")
        }
        else -> ""
    }
    return res
}
