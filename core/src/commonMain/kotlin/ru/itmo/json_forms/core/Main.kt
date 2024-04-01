package ru.itmo.json_forms.core

import kotlinx.serialization.json.JsonObject
import ru.itmo.json_forms.core.schema.*

fun main() {
    val json = FileUtils.readFile("/Users/vfeofilaktov/labs/json-forms-main/testdata/aiproj-1.2.json")
    val obj = SchemaParser.parse(json)
    print(dump(obj))
}

private fun dump(schema: JsonObject): String = buildString {
    appendLine("Title: ${schema.title}")
    appendLine("Description: ${schema.description}")

    schema.properties.forEach { (name, obj) ->
        appendLine("$name: ${obj.propertyType}")
        appendWithIndent(dump(obj))
    }
}

private fun StringBuilder.appendWithIndent(str: String) {
    str.lines().forEach { line ->
        appendLine("  $line")
    }
}
