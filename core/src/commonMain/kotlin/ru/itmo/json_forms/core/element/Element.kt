package ru.itmo.json_forms.core.element

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import ru.itmo.json_forms.core.schema.*
import ru.itmo.json_forms.core.schema.ObjectType

abstract class Element<out T: DataType>(val type: T) {
    override fun toString() = this::class.simpleName.toString()
}

abstract class BasicElement<out T: BasicType>(type: T) : Element<T>(type) {
    private var value = type.defaultValue
    fun withValue(value: String?): BasicElement<T> {
        this.value = value
        return this
    }
    override fun toString() = super.toString() + ": " + "value = $value"
}

class NullElement(type: NullType) : BasicElement<NullType>(type)
class StringElement(type: StringType) : BasicElement<StringType>(type)
class NumberElement(type: NumberType) : BasicElement<NumberType>(type)
class IntegerElement(type: IntegerType) : BasicElement<IntegerType>(type)
class BooleanElement(type: BooleanType) : BasicElement<BooleanType>(type)
class EnumElement(type: EnumType) : BasicElement<EnumType>(type)

class ObjectElement(type: ObjectType) : Element<ObjectType>(type) {
    val properties = mutableMapOf<String, Element<DataType>>()
}
class ArrayElement(
    type: ArrayType,
    items: List<Element<DataType>>
) : Element<ArrayType>(type) {
    private val items: MutableList<Element<DataType>> = items.toMutableList()
}

class OptionalElement(type: OptionalType) : Element<OptionalType>(type) {
    private var optional: Element<DataType>? = null
}

fun <T: DataType> fromJson(json: JsonElement, type: T): Element<T> {
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
