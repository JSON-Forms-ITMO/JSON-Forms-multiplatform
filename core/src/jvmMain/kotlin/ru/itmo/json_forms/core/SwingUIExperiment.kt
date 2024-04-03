package ru.itmo.json_forms.core

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import ru.itmo.json_forms.core.document.*
import ru.itmo.json_forms.core.schema.Schema
import java.awt.EventQueue
import javax.swing.GroupLayout
import javax.swing.JFrame
import javax.swing.JLabel
import javax.swing.SwingConstants

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

    val visitor = SwingDocumentVisitor()

    visitor.visit(document.root as ObjectElement)

    EventQueue.invokeLater { createAndShowGUI(visitor.elements) }
}

class SwingDocumentVisitor : DocumentVisitor {
    val elements = mutableListOf<Element<*>>()

    override fun visit(element: UnresolvedElement) {
        println("Unresolved(${element.untouched})")
        elements.add(element)
    }

    override fun visit(element: NullElement) {
        println("Null(${element.value})")
        elements.add(element)
    }

    override fun visit(element: StringElement) {
        println("String(${element.value})")
        elements.add(element)
    }

    override fun visit(element: NumberElement) {
        println("Number(${element.value})")
        elements.add(element)
    }

    override fun visit(element: IntegerElement) {
        println("Integer(${element.value})")
        elements.add(element)
    }

    override fun visit(element: BooleanElement) {
        println("Boolean(${element.value})")
        elements.add(element)
    }

    override fun visit(element: EnumElement) {
        println("Enum(${element.value})")
        elements.add(element)
    }

    override fun visit(element: ObjectElement) {
        println("Object")
        elements.add(element)

        for (property in element.properties()) {
            print("${property.key}: ")
            property.value.accept(this)
        }
    }

    override fun visit(element: ArrayElement) {
        println("Array")
        elements.add(element)

        for (item in element.items()) {
            item.accept(this)
        }
    }

    override fun visit(element: OptionalElement) {
        println("Optional(${element.type.someType})")
        elements.add(element)
    }

}

class JsonFormsDemo(title: String, val elements: List<Element<*>>) : JFrame() {

    init {
        createUI(title)
    }

    private fun createUI(title: String) {
        setTitle(title)

        defaultCloseOperation = EXIT_ON_CLOSE
        setSize(400, 300)
        setLocationRelativeTo(null)

        val labels = elements.map {
            JLabel(it.toString(), null, SwingConstants.LEFT)
        }

        createLayout(labels)
    }

    private fun createLayout(labels: List<JLabel>) {
        val gl = GroupLayout(contentPane)
        contentPane.layout = gl

        gl.setHorizontalGroup(
            gl.createParallelGroup().apply {
                for (label in labels) {
                    addComponent(label)
                }
            }
        )

        gl.setVerticalGroup(
            gl.createSequentialGroup().apply {
                for (label in labels) {
                    addComponent(label)
                }
            }
        )

        pack()
    }
}

private fun createAndShowGUI(elements: List<Element<*>>) {
    val frame = JsonFormsDemo("JSON Forms Swing Demo", elements)
    frame.isVisible = true
}