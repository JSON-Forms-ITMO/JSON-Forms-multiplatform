package ru.itmo.json_forms.core.document

import kotlin.js.JsExport

@JsExport
interface DocumentVisitor<R> {
    fun visitDocument(document: Document): R {
        return visit(document.root)
    }

    fun visit(element: Element<*>): R {
        return when (element) {
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

    fun visitUnresolved(element: UnresolvedElement): R
    fun visitNull(element: NullElement): R
    fun visitString(element: StringElement): R
    fun visitNumber(element: NumberElement): R
    fun visitInteger(element: IntegerElement): R
    fun visitBoolean(element: BooleanElement): R
    fun visitEnum(element: EnumElement): R
    fun visitObject(element: ObjectElement): R
    fun visitArray(element: ArrayElement): R
    fun visitOptional(element: OptionalElement): R
}
