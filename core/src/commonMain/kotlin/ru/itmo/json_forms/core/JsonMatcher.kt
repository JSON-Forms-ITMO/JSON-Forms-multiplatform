package ru.itmo.json_forms.core

import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import ru.itmo.json_forms.core.schema.JsonSchemaParser

fun JsonSchemaParser.match(
    propName: String,
    propBody: JsonElement,
    schemaDescr: JsonElement,
): IJsonNodeToSchemaNode {
    if (propBody !is JsonObject || schemaDescr !is JsonObject) {
        return JsonNodeToSchemaNode(propName, propBody, schemaDescr)
    }

    val schemaProperties = getProperties(schemaDescr)
    val jsonProperties = propBody.entries
    val children = mutableListOf<IJsonNodeToSchemaNode>()
    for ((propKey, propObj) in jsonProperties) {
        val propertyDescr = schemaProperties.firstOrNull { (key, _) -> key == propKey } ?: continue
        children.add(match(propKey, propObj, propertyDescr.value))
    }

    return JsonNodeToSchemaNodeWithChildren(propName, propBody, schemaDescr, children)
}
