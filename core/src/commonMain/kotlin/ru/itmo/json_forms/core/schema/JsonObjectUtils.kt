package ru.itmo.json_forms.core.schema

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonObject

val JsonObject.propertyType: JsonElement?
    get() = this["type"]

val JsonObject.title: String
    get() = this["title"].toString()

val JsonObject.description: String
    get() = this["description"].toString()

@Suppress("UNCHECKED_CAST")
val JsonObject.properties: List<Map.Entry<String, JsonObject>>
    get() = this["properties"]?.jsonObject?.entries.orEmpty()
        .filter { (k, v) -> !k.startsWith(Constants.JSON_KEY) && v is JsonObject }
            as List<Map.Entry<String, JsonObject>>
