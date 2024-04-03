package ru.itmo.json_forms.core.document

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import ru.itmo.json_forms.core.schema.Schema
import kotlin.js.JsExport

@JsExport
object JsonTreeBuilder {
    fun build(json: String, schema: String): Document {
        val schemaJsonObj = Json.decodeFromString<JsonObject>(schema)
        val schemaObj = Schema(schemaJsonObj)

        val jsonElement = Json.decodeFromString<JsonObject>(json)

        return Document(schemaObj, jsonElement)
    }
}
