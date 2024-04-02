package ru.itmo.json_forms.core

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import ru.itmo.json_forms.core.schema.*

fun main() {
    val repoDir = FileUtils.cwd().removeSuffix("/core")
    val jsonPath = "$repoDir/testdata/crowdin.json"
    val rawJson = FileUtils.readFile(jsonPath)
    val rawSchema = Json.decodeFromString<JsonObject>(rawJson)
    val schema = Schema(rawSchema)
    println(schema)
}
