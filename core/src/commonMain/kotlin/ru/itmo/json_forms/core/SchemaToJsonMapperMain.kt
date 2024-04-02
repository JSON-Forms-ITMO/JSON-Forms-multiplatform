package ru.itmo.json_forms.core

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import ru.itmo.json_forms.core.schema.JsonSchemaParser

fun main() {
    val schema = FileUtils.readFile("/Users/vfeofilaktov/labs/json-forms-main/testdata/aiproj/aiproj-1.2.json")
    val json = FileUtils.readFile("/Users/vfeofilaktov/labs/json-forms-main/testdata/aiproj/aiproj.json")

    val schemaObj = Json.decodeFromString<JsonObject>(schema)
    val jsonObj = Json.decodeFromString<JsonObject>(json)
    val schemaParser = JsonSchemaParser(schemaObj)
    val tree = schemaParser.match("root", jsonObj, schemaObj)
    print(tree.prettyPrint())
}

fun Any.prettyPrint(): String {

    var indentLevel = 0
    val indentWidth = 4

    fun padding() = "".padStart(indentLevel * indentWidth)

    val toString = toString()

    val stringBuilder = StringBuilder(toString.length)

    var i = 0
    while (i < toString.length) {
        when (val char = toString[i]) {
            '(', '[', '{' -> {
                indentLevel++
                stringBuilder.appendLine(char).append(padding())
            }
            ')', ']', '}' -> {
                indentLevel--
                stringBuilder.appendLine().append(padding()).append(char)
            }
            ',' -> {
                stringBuilder.appendLine(char).append(padding())
                // ignore space after comma as we have added a newline
                val nextChar = toString.getOrElse(i + 1) { char }
                if (nextChar == ' ') i++
            }
            else -> {
                stringBuilder.append(char)
            }
        }
        i++
    }

    return stringBuilder.toString()
}
