package ru.itmo.json_forms.core.schema

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject

object SchemaParser {
    fun parse(schema: String): JsonObject {
        return Json.decodeFromString(schema)
    }
}
