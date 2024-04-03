package ru.itmo.json_forms.core.document

import kotlin.js.JsExport

@JsExport
interface DocumentVisitor {
    fun visit(element: Element<*>) {
        when (element) {
            is ArrayElement -> visitArray(element)
            is BooleanElement -> visitBoolean(element)
            is EnumElement -> visitEnum(element)
            is IntegerElement -> visitInteger(element)
            is NullElement -> visitNull(element)
            is NumberElement -> visitNumber(element)
            is StringElement -> visitString(element)
            is ObjectElement -> visitObject(element)
            is OptionalElement -> visitOptional(element)
            is UnresolvedElement -> visitUnresolved(element)
        }
    }

    fun visitDocument(document: Document)
    fun visitUnresolved(element: UnresolvedElement)
    fun visitNull(element: NullElement)
    fun visitString(element: StringElement)
    fun visitNumber(element: NumberElement)
    fun visitInteger(element: IntegerElement)
    fun visitBoolean(element: BooleanElement)
    fun visitEnum(element: EnumElement)
    fun visitObject(element: ObjectElement)
    fun visitArray(element: ArrayElement)
    fun visitOptional(element: OptionalElement)
}
