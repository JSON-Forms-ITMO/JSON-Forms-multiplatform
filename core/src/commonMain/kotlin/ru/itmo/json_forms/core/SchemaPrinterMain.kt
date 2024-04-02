package ru.itmo.json_forms.core

import kotlinx.serialization.json.JsonObject
import ru.itmo.json_forms.core.schema.*

fun main() {
    val repoDir = FileUtils.cwd().removeSuffix("/core")
    val jsonPath = "$repoDir/testdata/aiproj-1.2.json"
    val json = FileUtils.readFile(jsonPath)
    val obj = SchemaParser.parse(json)
    val schemaParser = JsonSchemaParser(obj)
    print(schemaParser.dump(obj))
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
