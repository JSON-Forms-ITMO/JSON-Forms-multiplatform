package ru.itmo.json_forms.core.document

import kotlinx.serialization.json.*
import ru.itmo.json_forms.core.schema.*
import ru.itmo.json_forms.core.schema.ObjectType

abstract class Element<out T: DataType>(val type: T) {
    abstract fun toJsonElement(): JsonElement

    override fun toString() = this::class.simpleName.toString()
}

abstract class BasicElement<out T: BasicType>(type: T) : Element<T>(type) {
    var value = type.defaultValue
    internal fun withValue(value: String?): BasicElement<T> {
        this.value = value
        return this
    }
    override fun toString() = super.toString() + ": " + "value = $value"
}

class UnresolvedElement(type: DataType, val untouched: JsonElement) : Element<DataType>(type) {
    override fun toJsonElement() = untouched
}

class NullElement(type: NullType) : BasicElement<NullType>(type) {
    override fun toJsonElement() = JsonNull
}
class StringElement(type: StringType) : BasicElement<StringType>(type) {
    override fun toJsonElement() = JsonPrimitive(value)
}
class NumberElement(type: NumberType) : BasicElement<NumberType>(type) {
    override fun toJsonElement() = JsonPrimitive(JsonNumber(value))
}
class IntegerElement(type: IntegerType) : BasicElement<IntegerType>(type) {
    override fun toJsonElement() = JsonPrimitive(JsonNumber(value))
}
class BooleanElement(type: BooleanType) : BasicElement<BooleanType>(type) {
    override fun toJsonElement() = JsonPrimitive(value.toBoolean())
}
class EnumElement(type: EnumType) : BasicElement<EnumType>(type) {
    override fun toJsonElement() = JsonPrimitive(value) // TODO: store actual type somewhere
}

class ObjectElement(type: ObjectType) : Element<ObjectType>(type) {
    private val properties = mutableMapOf<String, Element<*>>()

    fun properties() = properties.toMap()

    fun addProperty(name: String, property: Element<*>) {
        val expectedType = type.properties[name] ?: throw AssertionError("no property with name '$name'")
        if (expectedType != property.type) {
            throw AssertionError("expected type $expectedType for property '$name' but got ${property.type}")
        }
        properties[name] = property
    }

    fun removeProperty(name: String) = properties.remove(name) // TODO: check if property is required?

    override fun toJsonElement(): JsonObject {
        return JsonObject(properties.entries.associate { Pair(it.key, it.value.toJsonElement()) })
    }
}

class ArrayElement(type: ArrayType, items: List<Element<*>>) : Element<ArrayType>(type) {
    private val items: MutableList<Element<*>> = items.toMutableList()

    fun items() = items.toList()

    fun addItem(index: Int, item: Element<*>) {
        if (type != item.type) {
            throw AssertionError("expected type $type but got ${item.type}")
        }
        items.add(index, item)
    }

    fun removeItem(index: Int) {
        items.removeAt(index)
    }

    override fun toJsonElement() = JsonArray(items.map { it.toJsonElement() })
}

class OptionalElement(type: OptionalType, private var value: Element<*>?) : Element<OptionalType>(type) {
    fun get(): Element<*>? = value

    fun some(value: Element<*>) {
        if (type.someType != value.type) {
            throw AssertionError("expected type ${type.someType} but got ${value.type}")
        }
        this.value = value
    }

    fun none() {
        value = null
    }

    override fun toJsonElement() = value?.toJsonElement() ?: JsonNull
}
