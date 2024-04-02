package ru.itmo.json_forms.core

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import ru.itmo.json_forms.core.schema.*

fun main() {
    val repoDir = FileUtils.cwd().removeSuffix("/core")
    val jsonPath = "$repoDir/testdata/aiproj-1.2.json"
    val rawJson = FileUtils.readFile(jsonPath)
    val rawSchema = Json.decodeFromString<JsonObject>(rawJson)
    val schema = Schema(rawSchema)
    println(schema)
    val schemaParser = JsonSchemaParser(rawSchema)
    println(schemaParser.dump(rawSchema))
}

private fun JsonSchemaParser.dump(schema: JsonObject): String = buildString {
    appendLine("Title: ${getPropertyTitle(schema)}")
    appendLine("Description: ${getPropertyDescription(schema)}")

    getProperties(schema).forEach { (name, obj) ->
        appendLine("$name: ${getPropertyType(obj)}")
        appendWithIndent(dump(obj))
    }
}

private fun StringBuilder.appendWithIndent(str: String) {
    str.lines().forEach { line ->
        appendLine("  $line")
    }
}
