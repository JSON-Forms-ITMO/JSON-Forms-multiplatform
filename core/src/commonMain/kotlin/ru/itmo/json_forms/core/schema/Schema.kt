package ru.itmo.json_forms.core.schema

import kotlinx.serialization.json.*

class Schema(rawSchema: JsonObject) {
    val root: DataType = parseDataType(rawSchema)

    override fun toString(): String {
        return visit(0, root)
    }
}

private fun parseDataType(obj: JsonObject): DataType {
    if (obj.containsKey("enum")) {
        return EnumType(obj["enum"]!!.jsonArray.map { it.toString() })
    }
    fun fallback(): DataType {
        return if (obj.containsKey("properties")
            || obj.containsKey("patternProperties")
            || obj.containsKey("additionalProperties")
            || obj.containsKey("unevaluatedProperties")
        ) {
            parseObjectType(obj)
        } else {
            UnknownType()
        }
    }
    return when(val t = obj["type"]) {
        is JsonPrimitive -> {
            when(t.content) {
                "string" -> StringType()
                "number" -> NumberType()
                "integer" -> IntegerType()
                "boolean" -> BooleanType()
                "null" -> NullType()
                "object" -> parseObjectType(obj)
                "array" -> parseArrayType(obj)
                else -> fallback()
            }
        }
        is JsonArray -> {
            val variantTypes = t.map { parsePrimitive(it.jsonPrimitive) }
            if (variantTypes.size == 2 && variantTypes.contains(NullType())) {
                var someType = variantTypes.find { it != NullType() }!!
                OptionalType(someType)
            } else {
                VariantType(variantTypes)
            }
        }
        else -> fallback()
    }
        .withTitle(obj["title"]?.toString())
        .withDescription(obj["description"]?.toString())
        .withDefaultValue(obj["default"]?.toString())
}

private fun parsePrimitive(prim: JsonPrimitive): DataType {
    return when(prim.content) {
        "string" -> StringType()
        "number" -> NumberType()
        "integer" -> IntegerType()
        "boolean" -> BooleanType()
        "null" -> NullType()
        "object" -> ObjectType(emptyMap(), emptySet())
        else -> UnknownType()
    }
}

private fun parseObjectType(obj: JsonObject): ObjectType {
    val properties = mutableMapOf<String, DataType>()
    obj["properties"]?.jsonObject?.entries?.forEach {
        it.value.jsonObject.let { value -> properties[it.key] = parseDataType(value) }
    }
    val required = obj["required"]?.jsonArray?.map { it.jsonPrimitive.content }?.toSet() ?: emptySet()
    return ObjectType(properties, required)
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
    when(type) {
        is BasicType -> res += indent("type = $type") + "\n"
        is ObjectType -> {
            if (type.properties.isEmpty()) {
                res += indent("<no properties>")
            } else {
                res += type.requiredProperties.toList().joinToString("\n") {
                    indent(it.first) + ": <required>\n" + visit(depth + 1, it.second).removeSuffix("\n")
                }
                res += type.optionalProperties.toList().joinToString("\n") {
                    indent(it.first) + ":\n" + visit(depth + 1, it.second).removeSuffix("\n")
                }
            }
        }
        is ArrayType -> {
            res += indent("type = $type[")
            res += "\n"
            res += type.prefixItems.toList().joinToString("\n") {
                visit(depth + 1, it).removeSuffix("\n")
            }
            res += visit(depth + 1, type.items) + "..."
            res += indent("\n]")
        }
    }
    type.defaultValue?.let {
        res += indent("default = $it")
    }
    return res
}
