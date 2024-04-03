package ru.itmo.json_forms.core

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import ru.itmo.json_forms.core.element.fromJson
import ru.itmo.json_forms.core.ir.IrBuilder
import ru.itmo.json_forms.core.schema.*

fun main() {
    val repoDir = FileUtils.cwd().removeSuffix("/core")
    val jsonPath = "$repoDir/testdata/omnisharp.json"
    val rawJson = FileUtils.readFile(jsonPath)
    val rawSchema = Json.decodeFromString<JsonObject>(rawJson)
    val schema = Schema(rawSchema)
    println(schema)

    val examplePath = jsonPath.replaceFirst(".json", "_example.json")
    val rawExample = FileUtils.readFile(examplePath)
    val rawJsonFile = Json.decodeFromString<JsonObject>(rawExample)
    val root = fromJson(rawJsonFile, schema.root)
    println(root)

    val irBuilder = IrBuilder(schema)
    irBuilder.build("{}")
}
