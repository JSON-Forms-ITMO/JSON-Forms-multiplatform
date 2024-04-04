package ru.itmo.json_forms.core

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import ru.itmo.json_forms.core.document.Document
import ru.itmo.json_forms.core.schema.Schema

fun main() {
    val repoDir = FileUtils.cwd().removeSuffix("/core")
    val jsonPath = "$repoDir/testdata/aiproj-1.2.json"
    val rawJson = FileUtils.readFile(jsonPath)
    val rawSchema = Json.decodeFromString<JsonObject>(rawJson)
    val schema = Schema(rawSchema)
    println(schema.toPrettyString())

    val documentPath = jsonPath.replaceFirst(".json", "_example.json")
    val rawDocumentText = FileUtils.readFile(documentPath)
    val rawDocumentJson = Json.decodeFromString<JsonObject>(rawDocumentText)
    val document = Document(schema, rawDocumentJson)
    println(document.getJson())
}
