package ru.itmo.json_forms.core.ir

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import ru.itmo.json_forms.core.schema.*

class IrBuilder(
    private val schema: Schema
) {
    fun build(json: String) {
        val parsed = Json.decodeFromString<JsonObject>(json)


    }

    private fun match(schemaNode: DataType, jsonNode: JsonObject, propertyName: String = "root") : IrNode<DataType> {
        return when (schemaNode) {

        }
    }
}
