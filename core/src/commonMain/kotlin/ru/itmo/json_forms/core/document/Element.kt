package ru.itmo.json_forms.core.document

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

class UnresolvedElement(type: DataType) : Element<DataType>(type)

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

class OptionalElement(type: OptionalType, private var optional: Element<DataType>?) : Element<OptionalType>(type)
