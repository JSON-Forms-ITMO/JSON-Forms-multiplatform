package ru.itmo.json_forms.core.document

import kotlin.js.JsExport

@JsExport
interface DocumentVisitor {
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
