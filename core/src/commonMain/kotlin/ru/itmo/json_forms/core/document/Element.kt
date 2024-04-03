package ru.itmo.json_forms.core.document

import kotlinx.serialization.json.*
import ru.itmo.json_forms.core.schema.*
import ru.itmo.json_forms.core.schema.ObjectType

abstract class Element<out T: DataType>(val type: T) {
    abstract fun toJsonElement(): JsonElement

    override fun toString() = this::class.simpleName.toString()
}

abstract class BasicElement<out T: BasicType>(type: T) : Element<T>(type) {
    private var value = type.defaultValue
    fun withValue(value: String?): BasicElement<T> {
        this.value = value
        return this
    }
    override fun toJsonElement() = JsonPrimitive(value)
    override fun toString() = super.toString() + ": " + "value = $value"
}

class UnresolvedElement(type: DataType, private val untouched: JsonElement) : Element<DataType>(type) {
    override fun toJsonElement() = untouched
}

class NullElement(type: NullType) : BasicElement<NullType>(type)
class StringElement(type: StringType) : BasicElement<StringType>(type)
class NumberElement(type: NumberType) : BasicElement<NumberType>(type)
class IntegerElement(type: IntegerType) : BasicElement<IntegerType>(type)
class BooleanElement(type: BooleanType) : BasicElement<BooleanType>(type)
class EnumElement(type: EnumType) : BasicElement<EnumType>(type)

class ObjectElement(type: ObjectType) : Element<ObjectType>(type) {
    val properties = mutableMapOf<String, Element<*>>()
    override fun toJsonElement(): JsonObject {
        return JsonObject(properties.entries.associate { Pair(it.key, it.value.toJsonElement()) })
    }
}

class ArrayElement(
    type: ArrayType,
    items: List<Element<*>>
) : Element<ArrayType>(type) {
    private val items: MutableList<Element<*>> = items.toMutableList()
    override fun toJsonElement() = JsonArray(items.map { it.toJsonElement() })
}

class OptionalElement(type: OptionalType, private var optional: Element<*>?) : Element<OptionalType>(type) {
    override fun toJsonElement() = optional?.toJsonElement() ?: JsonNull
}
