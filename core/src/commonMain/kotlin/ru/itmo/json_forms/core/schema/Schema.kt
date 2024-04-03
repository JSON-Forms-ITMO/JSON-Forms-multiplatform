package ru.itmo.json_forms.core.schema

import kotlinx.serialization.json.*
import ru.itmo.json_forms.core.ir.JMap
import ru.itmo.json_forms.core.ir.toJMap

class Schema(rawSchema: JsonObject) {
    val root: DataType = parseDataType(rawSchema)

    override fun toString(): String {
        return visit(0, root)
    }
}

private fun parseDataType(obj: JsonObject): DataType {
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
    val type = if (obj.containsKey("enum")) {
        EnumType(obj["enum"]!!.jsonArray.map { it.jsonPrimitive.content }.toTypedArray())
    } else when(val t = obj["type"]) {
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
                val someType = variantTypes.find { it != NullType() }!!
                val someType2 = when(someType) {
                    is ObjectType -> parseObjectType(obj)
                    is ArrayType -> parseArrayType(obj)
                    else -> someType
                }
                OptionalType(someType2)
            } else {
                VariantType(variantTypes.toTypedArray())
            }
        }
        else -> fallback()
    }
    return type
        .withTitle(obj["title"]?.jsonPrimitive?.content)
        .withDescription(obj["description"]?.jsonPrimitive?.content)
        .withDefaultValue(obj["default"]?.toString()?.removeSurrounding("\"")) // maybe default is not a primitive
}

private fun parsePrimitive(prim: JsonPrimitive): DataType {
    return when(prim.content) {
        "string" -> StringType()
        "number" -> NumberType()
        "integer" -> IntegerType()
        "boolean" -> BooleanType()
        "null" -> NullType()
        "object" -> ObjectType(JMap(emptyArray()), emptyArray())
        "array" -> ArrayType(emptyArray(), UnknownType())
        else -> UnknownType()
    }
}

private fun parseObjectType(obj: JsonObject): ObjectType {
    val properties = mutableMapOf<String, DataType>()
    obj["properties"]?.jsonObject?.entries?.forEach {
        it.value.jsonObject.let { value -> properties[it.key] = parseDataType(value) }
    }
    val required = obj["required"]?.jsonArray?.map { it.jsonPrimitive.content }?.toSet() ?: emptySet()
    return ObjectType(properties.toJMap(), required.toTypedArray())
}

private fun parseArrayType(obj: JsonObject): ArrayType {
    val items = obj["items"]?.let { parseDataType(it.jsonObject) }
    val prefixItems = mutableListOf<DataType>()
    obj["prefixItems"]?.jsonArray?.forEach {
        it.jsonObject.let { prefix -> prefixItems.add(parseDataType(prefix)) }
    }
    return ArrayType(prefixItems.toTypedArray(), items ?: UnknownType())
}

private fun visit(depth: Int, type: DataType): String {
    fun indent(str: String) = str.prependIndent("  ".repeat(depth))
    var res = ""
    type.title?.let {
        res += indent("title = \"$it\"") + "\n"
    }
    type.description?.let {
        res += indent("description = \"$it\"") + "\n"
    }
    when(type) {
        is BasicType -> res += indent("type = $type") + "\n"
        is ObjectType -> {
            res += indent("type = $type") + "\n"
            if (type.properties.isEmpty()) {
                res += indent("<no properties>")
            } else {
                res += type.requiredProperties.toList().joinToString("\n") {
                    indent(it.first) + ": >> required <<\n" + visit(depth + 1, it.second).trimEnd('\n', ' ')
                }
                if (type.requiredProperties.isNotEmpty()) {
                    res += "\n"
                }
                res += type.optionalProperties.toList().joinToString("\n") {
                    indent(it.first) + ":\n" + visit(depth + 1, it.second).trimEnd('\n', ' ')
                }
            }
        }
        is ArrayType -> {
            res += indent("type = $type[")
            res += "\n"
            res += type.prefixItems.toList().joinToString("\n") {
                visit(depth + 1, it).trimEnd('\n', ' ')
            }
            res += visit(depth + 1, type.items).trimEnd('\n', ' ') + "..."
            res += indent("\n]")
        }
        is OptionalType -> {
            res += indent(">> optional <<") + "\n"
            res += visit(depth, type.type).trimEnd('\n', ' ')
        }
    }
    type.defaultValue?.let {
        res += indent("default = $it")
    }
    res.trimEnd('\n', ' ')
    res += "\n"
    return res
}
