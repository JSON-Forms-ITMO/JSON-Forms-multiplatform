package ru.itmo.json_forms.core.ir

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import ru.itmo.json_forms.core.element.ObjectElement
import ru.itmo.json_forms.core.schema.ArrayType
import ru.itmo.json_forms.core.schema.DataType
import ru.itmo.json_forms.core.schema.ObjectType
import kotlin.js.JsExport

@JsExport
interface Node {
    val type: DataType
}

@JsExport
class ObjectNode(
    override val type: ObjectType,

    @Suppress("NON_EXPORTABLE_TYPE") // it's internal
    internal val children: JMap<String, Node>
) : Node {

    override fun toString(): String =
        "object node ${type.title}: \n" + children.map { "${it.key}: ${it.value} \n" } + "\n"

}

@JsExport
class ArrayNode(
    override val type: ArrayType,

    @Suppress("NON_EXPORTABLE_TYPE") // it's internal
    internal val children: MutableList<Node>
) : Node {
    private val element: ObjectElement? = null

    override fun toString(): String =
        "array node ${type.title}: \n" + children.map { it.toString() + "\n" } + "\n"

//    fun addElement(): Node {
//        val node =
//        children.add()
//    }
}

@JsExport
class NodeWithoutChildren(
    override val type: DataType,
) : Node {
    private val value: JsonElement? = null

    override fun toString(): String =
        "node ${type.title} \n"
}

fun DataType.toNode() : Node = when (this) {
    is ArrayType -> ArrayNode(this, prefixItems.map { it.toNode() }.toMutableList())
    is ObjectType -> ObjectNode(this, JMap(properties.map { e -> JMapEntry(e.key, e.value.toNode()) }.toTypedArray()))
    else -> NodeWithoutChildren(this)
}
