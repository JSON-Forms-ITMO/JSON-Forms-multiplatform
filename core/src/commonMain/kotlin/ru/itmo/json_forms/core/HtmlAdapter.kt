package ru.itmo.json_forms.core

import ru.itmo.json_forms.core.document.*
import ru.itmo.json_forms.core.schema.*

class HtmlAdapter : AbstractAdapter() {

    private var htmlPage = StringBuilder()
    // script block place in end of html body
    private var scripts = StringBuilder()

    override fun init() {
        htmlPage.clear()
    }

    override fun renderJson(root: Element<DataType>) {
        val html = getView(root.type)
        val result = StringBuilder("<html><head>${getStyle()}</head><body>").append(html).append("<script>${scripts}</script></body></html>")
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
            is OptionalType -> getOptionalField(type)
            else -> { println("Ой-ой"); "" }
        }
    }
    override fun onEnd() {
//        val repoDir = FileUtils.cwd().removeSuffix("/core")
//        FileUtils.writeFile("$repoDir/preview.html", htmlPage.toString())
    }

    override fun getContent(): String {
        return htmlPage.toString()
    }

    private fun getOptionalField(type: OptionalType): String {
        val fieldName = type.title
        val fieldId = cleanupString(type.uniqId)
        val description = if (type.description == null) "" else type.description
        if (fieldName != null) {
            scripts.append(getCollapseScript(fieldId))
            val content = "<div class=\"property\" disabled id=\"$fieldId\">${getCollapseButton(fieldId)}<br><label>$fieldName: </label><br>${description}<br>${getView(type.someType, true)}</div>"
            return content
        }
        return getView(type.someType, true)
    }

    private fun getObjectField(type: ObjectType, isOptional: Boolean): String {
        val fieldName = type.title
        val fieldId = cleanupString(type.uniqId)
        val description = if (type.description == null) "" else type.description
        if (fieldName == null) {
            val properties = type.properties.filter { it.key != "\$schema" }.map { getView(it.value) }.joinToString("")
            return getHtmlElement(fieldId, properties, isOptional, false)
        }
        val properties = type.properties.filter { it.key != "\$schema" }.map { getView(it.value) }.joinToString("")
        val content = "<div class=\"property\" ${if (isOptional) "disabled" else ""} id=\"$fieldId\"><label>$fieldName: </label><br>${description}<br>$properties</div>"

        return getHtmlElement(fieldId, content, isOptional, true)
    }

    private fun getField(type: StringType, isOptional: Boolean): String {
        val fieldName = type.title
        val fieldId = cleanupString(type.uniqId)
        val description = if (type.description == null) "" else type.description
        if (fieldName == null) {
            val content = "<div> <input type=\"text\" id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><br>${description}</div>"
            return getHtmlElement(fieldId, content, isOptional, false)
        }
        val content = "<div><label>$fieldName: </label>" +
                "<input type=\"text\" id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><br>${description}</div>"

        return getHtmlElement(fieldId, content, isOptional, true)
    }

    private fun getIntegerField(type: IntegerType, isOptional: Boolean): String {
        val fieldName = type.title
        val fieldId = cleanupString(type.uniqId)
        val description = if (type.description == null) "" else type.description
        if (fieldName == null) {
            val content = "<div><input type=\"number\" id=\"$fieldId\" ${if (isOptional) "disabled" else ""} oninput=\"this.value = Math.round(this.value);\"><br>${description}</div>"
            return getHtmlElement(fieldId, content, isOptional, false)
        }
        val content = "<div><label>$fieldName: </label>" +
                "<input type=\"number\" id=\"$fieldId\" ${if (isOptional) "disabled" else ""} oninput=\"this.value = Math.round(this.value);\"><br>${description}</div>"

        return getHtmlElement(fieldId, content, isOptional, true)
    }

    private fun getNumericalField(type: NumberType, isOptional: Boolean): String {
        val fieldName = type.title
        val fieldId = cleanupString(type.uniqId)
        val description = if (type.description == null) "" else type.description
        if (fieldName == null) {
            val content = "<div><input type=\"number\" id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><br>${description}</div>"
            return getHtmlElement(fieldId, content, isOptional, false)
        }
        val content = "<div><label>$fieldName: </label>" +
                "<input type=\"number\" id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><br>${description}</div>"

        return getHtmlElement(fieldId, content, isOptional, true)
    }

    private fun getFlagField(type: BooleanType, isOptional: Boolean): String {
        val fieldName = type.title
        val fieldId = cleanupString(type.uniqId)
        val description = if (type.description == null) "" else type.description
        if (fieldName == null) {
            val content =
            "<div><label>Value: </label><input type=\"checkbox\" id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><br>" +
                    description + "</div>"
            return getHtmlElement(fieldId, content, isOptional, false)
        }
        val content =
            "<div><label>$fieldName</label>" + ": <input type=\"checkbox\" id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><br>" +
                    description + "</div>"

        return getHtmlElement(fieldId, content, isOptional, true)
    }

    private fun getListField(type: EnumType, isOptional: Boolean): String {
        val fieldName = type.title
        val description = if (type.description == null) "" else type.description
        val fieldId = cleanupString(type.uniqId)
        val listItems = type.values
        if (fieldName == null) {
            val content = StringBuilder(
                "<div id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><select name=\"${type.hashCode()}\">"
            )
            listItems.forEach { content.append("<option value=\"$it\">$it</option>") }
            content.append("</select><br><br></div>")

            return getHtmlElement(fieldId, content.toString(), isOptional, false)
        }
        val content = StringBuilder(
            "<div id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><label>$fieldName:</label>" +
                    "<select name=\"$fieldName\" id=\"$fieldName\">"
        )

        listItems.forEach { content.append("<option value=\"$it\">$it</option>") }
        content.append("</select><br><br></div>")

        return getHtmlElement(fieldId, content.toString(), isOptional, true)
    }

    private fun getDynamicArray(type: ArrayType, isOptional: Boolean): String {
        val fieldName = type.title
        val description = if (type.description == null) "" else type.description
        val fieldId = cleanupString(type.uniqId)
        if (fieldName == null) {
            val funName = "add${fieldId}"
            val content = StringBuilder(
                "<div id=\"$fieldId\" ${if (isOptional) "disabled" else ""}>" +
                        "<button onclick=\"$funName()\">Add</button>" +
                        "<div id=\"$fieldId-elements\"> <p>Elements:</p> </div></div>"
            )
            val addScript = "function $funName() {" +
                    "        const newBlock = '<div class=\"property\">${getView(type.items)}<button onclick=\"this.parentNode.remove()\">Delete</button></div>';" +
                    "        document.getElementById('$fieldId-elements').insertAdjacentHTML('beforeend', newBlock);" +
                    "    }"
            scripts.append(addScript)
            return getHtmlElement(fieldId, content.toString(), isOptional, false)
        }
        val funName = "add${fieldId}"
        val content = StringBuilder(
            "<div id=\"$fieldId\" ${if (isOptional) "disabled" else ""}><label>$fieldName:</label><br> " +
                    "<button onclick=\"$funName()\">Add</button>" +
                    "<div id=\"$fieldName-elements\"> <p>Elements:</p> </div></div>"
        )
        val addScript = "function $funName() {" +
                "        const newBlock = '<div class=\"property\">${getView(type.items)}<button onclick=\"this.parentNode.remove()\">Delete</button></div>';" +
                "        document.getElementById('$fieldName-elements').insertAdjacentHTML('beforeend', newBlock);" +
                "    }"
        scripts.append(addScript)
        return getHtmlElement(fieldId, content.toString(), isOptional, true)
    }

    private fun getStyle(): String {
        val style = "<style>" +
                "    .property {" +
                "       border: 1px solid black;" +
                "       padding: 10px;" +
                "       margin: 10px;" +
                "       overflow: hidden;" +
                "    }" +
                "    .elementToCollapse {" +
                "       background-color: lightblue;" +
                "       padding: 20px;" +
                "       margin: 20px;" +
                "       overflow: hidden;" +
                "       transition: height 0.3s ease;" +
                "   }" +
                "   .arrow-up::before {" +
                "       content: \"\\25B2\"; /* Стрелка вверх */" +
                "   }" +
                "   .arrow-down::before {" +
                "       content: \"\\25BC\"; /* Стрелка вниз */" +
                "   }" +
                "   .collapseButton {" +
                "       border: none;" +
                "       background-color: transparent;" +
                "       font-size: 16px;" +
                "       cursor: pointer;" +
                "       padding: 5px;" +
                "       outline: none;" +
                "       margin-right: 10px;" +
                "   }" +
                "</style>"
        return style
    }

    private fun getHtmlElement(fieldId: String, content: String, isOptional: Boolean, needBorder: Boolean): String {
        val classProperty = if (needBorder) "class=\"property\"" else ""
        if (isOptional) {
            val checkbox = "<input type=\"checkbox\" id=\"$fieldId-checkbox\">Enable optional field"
            scripts.append(getScriptLinksCheckBoxToElement("$fieldId-checkbox", fieldId))
            val optionalControl = "<div>$checkbox</div>"
            return "<div $classProperty>${content}${optionalControl}</div>"
        }
        return "<div $classProperty>$content</div>"
    }

    private fun getScriptLinksCheckBoxToElement(checkboxId: String, elementId: String): String {
        val script = "document.getElementById(\"$checkboxId\").addEventListener(\"change\", function() {" +
                "            const element = document.getElementById(\"$elementId\");" +
                "            element.disabled = !this.checked;" +
                "        });"
        return script
    }

    private fun getCollapseScript(fieldId: String): String {
        val collapseButtonId = "collapseButton$fieldId"
        val collapseFun = "toggleCollapse$fieldId()"
        val collapseScript = "function $collapseFun {" +
                "  var element = document.getElementById(\"$fieldId\");" +
                "  var button = document.getElementById(\"$collapseButtonId\");" +
                "  if (element.style.height === \"50px\" || element.offsetHeight === 0) {" +
                "    element.style.height = \"auto\";" +
                "    button.classList.remove(\"arrow-down\");" +
                "    button.classList.add(\"arrow-up\");" +
                "    button.textContent = \"Collapse\";" +
                "  } else {" +
                "    element.style.height = \"50px\";"  +
                "    button.classList.remove(\"arrow-up\");" +
                "    button.classList.add(\"arrow-down\");" +
                "    button.textContent = \"Expand\";" +
                "  }" +
                "}"

        return collapseScript
    }

    private fun getCollapseButton(fieldId: String): String {
        val collapseButtonId = "collapseButton$fieldId"
        val collapseFun = "toggleCollapse$fieldId()"
        val collapseButton = "<button onclick=\"$collapseFun\" id=\"$collapseButtonId\" class=\"arrow-up\">Collapse</button>"

        return collapseButton
    }

    private fun cleanupString(input: String): String {
        return input.replace(" ", "").replace("-", "")
    }

}