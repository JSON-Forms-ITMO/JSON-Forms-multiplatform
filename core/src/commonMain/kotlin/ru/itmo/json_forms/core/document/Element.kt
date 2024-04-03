package ru.itmo.json_forms.core.document

import kotlinx.serialization.json.*
import ru.itmo.json_forms.core.ir.toJMap
import ru.itmo.json_forms.core.schema.*
import ru.itmo.json_forms.core.schema.ObjectType
import kotlin.js.JsExport

@JsExport
abstract class Element<out T: DataType>(val type: T) {
    internal abstract fun toJsonElement(): JsonElement

    override fun toString() = this::class.simpleName.toString()
}

@JsExport
abstract class BasicElement<out T: BasicType>(type: T) : Element<T>(type) {
    var value = type.defaultValue
    internal fun withValue(value: String?): BasicElement<T> {
        this.value = value
        return this
    }

    override fun toString() = super.toString() + ": " + "value = $value"
}

@JsExport
class UnresolvedElement(
    type: DataType,
    @Suppress("NON_EXPORTABLE_TYPE")
    private val untouched: JsonElement
) : Element<DataType>(type) {
    override fun toJsonElement() = untouched
}

@JsExport
class NullElement(type: NullType) : BasicElement<NullType>(type) {
    override fun toJsonElement() = JsonNull
}

@JsExport
class StringElement(type: StringType) : BasicElement<StringType>(type) {
    override fun toJsonElement() = JsonPrimitive(value)
}

@JsExport
class NumberElement(type: NumberType) : BasicElement<NumberType>(type) {
    override fun toJsonElement() = JsonPrimitive(JsonNumber(value))
}

@JsExport
class IntegerElement(type: IntegerType) : BasicElement<IntegerType>(type) {
    override fun toJsonElement() = JsonPrimitive(JsonNumber(value))
}

@JsExport
class BooleanElement(type: BooleanType) : BasicElement<BooleanType>(type) {
    override fun toJsonElement() = JsonPrimitive(value.toBoolean())
}

@JsExport
class EnumElement(type: EnumType) : BasicElement<EnumType>(type) {
    override fun toJsonElement() = JsonPrimitive(value) // TODO: store actual type somewhere
}

@JsExport
class ObjectElement(type: ObjectType) : Element<ObjectType>(type) {
    internal val myProperties = mutableMapOf<String, Element<*>>()

    fun getProperties() = myProperties.toJMap()

    fun addProperty(name: String, property: Element<*>) {
        val expectedType = type.properties[name] ?: throw AssertionError("no property with name '$name'")
        if (expectedType != property.type) {
            throw AssertionError("expected type $expectedType for property '$name' but got ${property.type}")
        }
        myProperties[name] = property
    }

    fun removeProperty(name: String) = myProperties.remove(name) // TODO: check if property is required?

    override fun toJsonElement(): JsonObject {
        return JsonObject(myProperties.entries.associate { Pair(it.key, it.value.toJsonElement()) })
    }
}

@JsExport
class ArrayElement(type: ArrayType, items: Array<Element<*>>) : Element<ArrayType>(type) {
    private val items: MutableList<Element<*>> = items.toMutableList()

    fun items() = items.toTypedArray()

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

@JsExport
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
