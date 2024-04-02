package ru.itmo.json_forms.core.element

import ru.itmo.json_forms.core.schema.*
import ru.itmo.json_forms.core.schema.ObjectType

abstract class Element<out T: DataType>(val type: T)
abstract class BasicElement<out T: BasicType>(type: T) : Element<T>(type) {
    private var value = type.defaultValue
}

class NullElement(type: NullType) : BasicElement<NullType>(type)
class StringElement(type: StringType) : BasicElement<StringType>(type)
class NumberElement(type: NumberType) : BasicElement<NumberType>(type)
class IntegerElement(type: IntegerType) : BasicElement<IntegerType>(type)
class BooleanElement(type: BooleanType) : BasicElement<BooleanType>(type)
class EnumElement(type: EnumType) : BasicElement<EnumType>(type)

class ObjectElement(type: ObjectType) : Element<ObjectType>(type) {
    private val properties = mutableMapOf<String, Element<DataType>>()
}
class ArrayElement(
    type: ArrayType,
    private val items: MutableList<Element<DataType>> = mutableListOf()
) : Element<ArrayType>(type), MutableList<Element<DataType>> by items {
    // TODO: ???
}

class OptionalElement(type: OptionalType) : Element<OptionalType>(type) {
    private var optional: Element<DataType>? = null
}
