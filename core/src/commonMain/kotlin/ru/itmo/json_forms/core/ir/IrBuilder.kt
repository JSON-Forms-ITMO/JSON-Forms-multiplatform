package ru.itmo.json_forms.core.ir

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import ru.itmo.json_forms.core.schema.*

class IrBuilder(
    private val schema: Schema
) {
    fun build(json: String) {
        // Do we take here initial data for the form?
        val parsed = Json.decodeFromString<JsonObject>(json)

        val nodes = schema.root.toNode()
        println(nodes)
    }

    private fun match(schemaNode: DataType, jsonNode: JsonObject, propertyName: String = "root") {
//        return when (schemaNode) {
//            is BasicType -> {}
//        }
    }
}
