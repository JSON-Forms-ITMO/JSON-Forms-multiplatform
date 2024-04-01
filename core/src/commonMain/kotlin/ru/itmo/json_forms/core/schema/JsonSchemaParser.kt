package ru.itmo.json_forms.core.schema

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive

class JsonSchemaParser(private val root: JsonObject) {
    fun getPropertyType(obj: JsonObject): JsonElement? = obj["type"]

    fun getPropertyTitle(obj: JsonObject): String? = obj["title"]?.jsonPrimitive?.toString()

    fun getPropertyDescription(obj: JsonObject): String? = obj["description"]?.jsonPrimitive?.toString()

    @Suppress("UNCHECKED_CAST")
    fun getProperties(obj: JsonObject): List<Map.Entry<String, JsonObject>> {
        val entries = obj["properties"]?.jsonObject?.entries.orEmpty()

        return entries.filter { (k, v) -> !k.startsWith(Constants.JSON_KEY) && v is JsonObject }
                as List<Map.Entry<String, JsonObject>>
    }
}
