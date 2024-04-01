package ru.itmo.json_forms.core

import kotlinx.serialization.json.JsonElement

sealed interface IJsonNodeToSchemaNode {
    val propertyName: String
    val propertyValue: JsonElement
    val schemaDescription: JsonElement
}

data class JsonNodeToSchemaNode(
    override val propertyName: String,
    override val propertyValue: JsonElement,
    override val schemaDescription: JsonElement,
) : IJsonNodeToSchemaNode

data class JsonNodeToSchemaNodeWithChildren(
    override val propertyName: String,
    override val propertyValue: JsonElement,
    override val schemaDescription: JsonElement,
    val children: List<IJsonNodeToSchemaNode>
) : IJsonNodeToSchemaNode
