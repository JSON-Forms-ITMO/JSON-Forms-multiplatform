package ru.itmo.json_forms.core

import ru.itmo.json_forms.core.document.*
import ru.itmo.json_forms.core.schema.*

class HtmlAdapter : AbstractAdapter() {

    private var htmlPage = StringBuilder()

    override fun init() {
        htmlPage.clear()
    }

    override fun renderJson(root: Element<DataType>) {
        val result = StringBuilder("<html><head>${getStyle()}</head><body>")
        result.append(getView(root.type)).append("</body></html>")
        htmlPage = result
    }

    private fun getView(type: DataType, optional: Boolean = false): String{
        return when (type) {
            is StringType -> getField(type, optional)
            is NumberType -> getNumericalField(type, optional)
            is IntegerType -> getIntegerField(type, optional)
            is BooleanType -> getFlagField(type, optional)
            is EnumType -> getListField(type, optional)
            is ArrayType -> getDynamicArray(type, optional)
            is ObjectType -> getObjectField(type, optional)
            is OptionalType -> getView(type.someType, true)
            else -> { println("Ой-ой"); "" }
        }
    }
    override fun onEnd() {
        val repoDir = FileUtils.cwd().removeSuffix("/core")
        FileUtils.writeFile("$repoDir/preview.html", htmlPage.toString())
    }

    override fun getContent(): String {
        return htmlPage.toString()
    }

    private fun getObjectField(type: ObjectType, isOptional: Boolean): String {
        var fieldName = type.title
        val fieldId = type.uniqId
        val description = type.description
        if (fieldName == null) {
            fieldName = "undefiend"
//            return ""
        }
        val properties = type.properties.map { getView(it.value) }.joinToString("")
        val content = "<div class='property' ${if (isOptional) "disabled" else ""} id=\"$fieldId\"><label>$fieldName: </label><br>${description}<br>$properties</div>"

        return getHtmlElement(fieldId, content, isOptional)
    }
    private fun getField(type: StringType, isOptional: Boolean): String {
        val fieldName = type.title
        val fieldId = type.uniqId
        val description = type.description
        if (fieldName == null) {
            return ""
        }
        val content = "<div><label>$fieldName: </label>" +
                "<input type=\"text\" id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><br>${description}</div>"

        return getHtmlElement(fieldId, content, isOptional)
    }

    private fun getIntegerField(type: IntegerType, isOptional: Boolean): String {
        val fieldName = type.title
        val fieldId = type.uniqId
        val description = type.description
        if (fieldName == null) {
            return ""
        }
        val content = "<div><label>$fieldName: </label>" +
                "<input type=\"number\" id=\"$fieldId\" ${if (isOptional) "disabled" else ""} oninput=\"this.value = Math.round(this.value);\"><br>${description}</div>"

        return getHtmlElement(fieldId, content, isOptional)
    }

    private fun getNumericalField(type: NumberType, isOptional: Boolean): String {
        val fieldName = type.title
        val fieldId = type.uniqId
        val description = type.description
        if (fieldName == null) {
            return ""
        }
        val content = "<div><label>$fieldName: </label>" +
                "<input type=\"number\" id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><br>${description}</div>"

        return getHtmlElement(fieldId, content, isOptional)
    }

    private fun getFlagField(type: BooleanType, isOptional: Boolean): String {
        val fieldName = type.title
        val fieldId = type.uniqId
        val description = type.description
        if (fieldName == null) {
            return ""
        }
        val content =
            "<div><label>\n" + fieldName + ": <input type=\"checkbox\" id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><br>" +
                    description + "</label></div>"

        return getHtmlElement(fieldId, content, isOptional)
    }

    private fun getListField(type: EnumType, isOptional: Boolean): String {
        val fieldName = type.title
        val description = type.description
        val fieldId = type.uniqId
        val listItems = type.values
        if (fieldName == null) {
            val content = StringBuilder(
                "<div id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><select name=\"${type.hashCode()}\">"
            )
            listItems.forEach { content.append("<option value=\"$it\">$it</option>") }
            content.append("</select><br><br></div>")

            return content.toString()
        }
        val content = StringBuilder(
            "<div id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><label>$fieldName:</label>  \n" +
                    "<select name=\"$fieldName\" id=\"$fieldName\">\n"
        )

        listItems.forEach { content.append("<option value=\"$it\">$it</option>\n") }
        content.append("</select><br><br></div>")

        return getHtmlElement(fieldId, content.toString(), isOptional)
    }

    private fun getDynamicArray(type: ArrayType, isOptional: Boolean): String {
        val fieldName = type.title
        val description = type.description
        val fieldId = type.uniqId
        if (fieldName == null) {
            return ""
        }
        val funName = "add${removeSpaces(fieldName)}"
        val content = StringBuilder(
            "<div id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><label>$fieldName:</label><br> \n" +
                    "<button onclick=\"$funName()\">Add</button>\n" +
                    "<div id=\"$fieldName-elements\"> <p>Elements:</p> </div>\n"
        )
        val addScript = "<script>\n" +
                "    let blockCount = 1;\n" +
                "    function $funName() {\n" +
                "        var newBlock = '<div class=\"property\">${getView(type.items)}<button onclick=\"this.parentNode.remove()\">Delete</button></div>';\n" +
                "        document.getElementById('$fieldName-elements').insertAdjacentHTML('beforeend', newBlock);\n" +
                "        blockCount++;\n" +
                "    }\n" +
                "</script>"

        content.append(addScript, "</div>")
        return getHtmlElement(fieldId, content.toString(), isOptional)
    }

    private fun getStyle(): String {
        val style = "<style>\n" +
                "    .addedBlock {\n" +
                "        border: 1px solid black;\n" +
                "        padding: 10px;\n" +
                "        margin: 10px;\n" +
                "    }\n" +
                "    .property {\n" +
                "        border: 1px solid black;\n" +
                "        padding: 10px;\n" +
                "        margin: 10px;\n" +
                "    }" +
                "</style>"
        return style
    }

    private fun getHtmlElement(fieldId: String, content: String, isOptional: Boolean): String {
        if (isOptional) {
            val checkbox = "<input type=\"checkbox\" id=\"$fieldId-checkbox\">Enable optional field"
            val optionalLogicScript = getScriptLinksCheckBoxToElement("$fieldId-checkbox", fieldId)
            val optionalControl = "<div>$checkbox $optionalLogicScript</div>"
            return "<div class='property'>${content}${optionalControl}</div>"
        }
        return "<div class='property'>$content</div>"
    }

    private fun getScriptLinksCheckBoxToElement(checkboxId: String, elementId: String): String {
        val script = "<script>\n" +
                "        document.getElementById(\"$checkboxId\").addEventListener(\"change\", function() {\n" +
                "            var element = document.getElementById(\"$elementId\");\n" +
                "            if (this.checked) {\n" +
                "                element.disabled = false;\n" +
                "            } else {\n" +
                "                element.disabled = true;\n" +
                "            }\n" +
                "        });\n" +
                "    </script>"
        return script
    }

    private fun removeSpaces(input: String): String {
        return input.replace(" ", "")
    }

}