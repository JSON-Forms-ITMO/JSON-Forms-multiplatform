package ru.itmo.json_forms.core.document

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import ru.itmo.json_forms.core.schema.*

class Document(schema: Schema, rawJson: JsonElement) {
    val root = fromJson(rawJson, schema.root)

    override fun toString() = "Document: root = $root"
}

private fun <T: DataType> fromJson(json: JsonElement, type: T): Element<T> {
    return when(type) {
        is NullType -> NullElement(type).withValue(json.jsonPrimitive.content)
        is StringType -> StringElement(type).withValue(json.jsonPrimitive.content)
        is NumberType -> NumberElement(type).withValue(json.jsonPrimitive.content)
        is IntegerType -> IntegerElement(type).withValue(json.jsonPrimitive.content)
        is BooleanType -> BooleanElement(type).withValue(json.jsonPrimitive.content)
        is EnumType -> EnumElement(type).withValue(json.jsonPrimitive.content)
        is ArrayType -> {
            val items = json.jsonArray.map { fromJson(it, type.items) }
            ArrayElement(type, items)
        }
        is ObjectType -> {
            val properties = json.jsonObject.map {
                type.properties[it.key]?.let { type -> Pair(it.key, fromJson(it.value, type)) }
            }.filterNotNull().toMap()
            val obj = ObjectElement(type)
            obj.properties.putAll(properties)
            obj
        }
        is OptionalType -> OptionalElement(type)
        else -> throw IllegalArgumentException()
    } as Element<T> // it is required somehow
}
