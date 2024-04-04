import * as jsonForms from 'json-forms-core';
import * as fs from 'fs';
import Element = jsonForms.ru.itmo.json_forms.core.document.Element;
import DataType = jsonForms.ru.itmo.json_forms.core.schema.DataType;
import StringType = jsonForms.ru.itmo.json_forms.core.schema.StringType;
import NumberType = jsonForms.ru.itmo.json_forms.core.schema.NumberType;
import IntegerType = jsonForms.ru.itmo.json_forms.core.schema.IntegerType;
import BooleanType = jsonForms.ru.itmo.json_forms.core.schema.BooleanType;
import EnumType = jsonForms.ru.itmo.json_forms.core.schema.EnumType;
import ArrayType = jsonForms.ru.itmo.json_forms.core.schema.ArrayType;
import ObjectType = jsonForms.ru.itmo.json_forms.core.schema.ObjectType;
import OptionalType = jsonForms.ru.itmo.json_forms.core.schema.OptionalType;
import JMapEntry = jsonForms.ru.itmo.json_forms.core.ir.JMapEntry;
import StringElement = jsonForms.ru.itmo.json_forms.core.document.StringElement;
import NumberElement = jsonForms.ru.itmo.json_forms.core.document.NumberElement;
import IntegerElement = jsonForms.ru.itmo.json_forms.core.document.IntegerElement;
import BooleanElement = jsonForms.ru.itmo.json_forms.core.document.BooleanElement;
import EnumElement = jsonForms.ru.itmo.json_forms.core.document.EnumElement;
import ArrayElement = jsonForms.ru.itmo.json_forms.core.document.ArrayElement;
import BasicElement = jsonForms.ru.itmo.json_forms.core.document.BasicElement;
import ObjectElement = jsonForms.ru.itmo.json_forms.core.document.ObjectElement;
import OptionalElement = jsonForms.ru.itmo.json_forms.core.document.OptionalElement;

export class HtmlAdapter {
    private htmlPage: string;
    private scripts: string;

    constructor() {
        this.htmlPage = '';
        this.scripts = '';
    }

    public init() {
        this.htmlPage = '';
    }

    public renderJson(root: Element<DataType>) {
        this.scripts += "const vscode = acquireVsCodeApi();";
        const html = this.getView(root.type);
        const result = `<html><head>${this.getStyle()}</head><body>${html}<script>${this.scripts}</script></body></html>`;
        this.htmlPage = result;
    }

    private getView(type: DataType, optional: boolean = false): string {
        switch (type.constructor) {
            case StringType:
                return this.getField(type as StringType, optional);
            case NumberType:
                return this.getNumericalField(type as NumberType, optional);
            case IntegerType:
                return this.getIntegerField(type as IntegerType, optional);
            case BooleanType:
                return this.getFlagField(type as BooleanType, optional);
            case EnumType:
                return this.getListField(type as EnumType, optional);
            case ArrayType:
                return this.getDynamicArray(type as ArrayType, optional);
            case ObjectType:
                return this.getObjectField(type as ObjectType, optional);
            case OptionalType:
                return this.getOptionalField(type as OptionalType);
            default:
                console.log("Ой-ой");
                return "";
        }
    }

    public setView(node: Element<DataType>, uniqId: string, value: any): void {
        switch (node.type.constructor) {
            case StringType: {
                if (node.type.uniqId === uniqId) {
                    const newValue: string = value.toString();
                    (node as BasicElement<StringType>).value = newValue;
                }
                return;
            }
            case NumberType: {
                if (node.type.uniqId === uniqId) {
                    (node as NumberElement).value = value;
                }
                return;
            }
            case IntegerType: {
                if (node.type.uniqId === uniqId) {
                    (node as IntegerElement).value = value;
                }
                return;
            }
            case BooleanType: {
                if (node.type.uniqId === uniqId) {
                    if (value) {
                        (node as BooleanElement).value = "true";
                    } else {
                        (node as BooleanElement).value = "false";
                    }
                }
                return;
            }
            case EnumType: {
                if (node.type.uniqId === uniqId) {
                    (node as EnumElement).value = value;
                }
                return;
            }
            case ArrayType: {
                if (node.type.uniqId === uniqId) {
                    // (node as ArrayElement).value = value;
                }
                return;
            }
            case ObjectType: {
                // if (node.type.uniqId === uniqId) {
                //      = value;
                // }
                const object = (node as ObjectElement);
                const properties = object.getProperties();
                properties.jsValues.map( element => this.setView(element, uniqId, value));
                return;
            }
            case OptionalType: {
                if (node.type.uniqId === uniqId) {
                    (node as OptionalElement).put = value;
                }
                return;
            }
            default:
                console.log("Ой-ой");
                return;
        }
    }


    public onEnd() {
        fs.writeFileSync(`/home/donebd/jsonFormsPlugin/json-forms/preview.html`, this.htmlPage);
    }

    public getContent(): string {
        return this.htmlPage;
    }

    private getOptionalField(type: OptionalType): string {
        const fieldName = type.title;
        const fieldId = this.cleanupString(type.uniqId);
        const description = type.description || '';
        let content = '';
        if (fieldName) {
            this.scripts += this.getCollapseScript(fieldId);
            content = `<div class="property" disabled id="${fieldId}">${this.getCollapseButton(fieldId)}<br><label>${fieldName}: </label><br>${description}<br>${this.getView(type.someType, true)}</div>`;
        }
        return content || this.getView(type.someType, true);
    }

    private getObjectField(type: ObjectType, isOptional: boolean): string {
        const fieldName = type.title;
        const fieldId = this.cleanupString(type.uniqId);
        const description = type.description || '';
        let content = '';
        if (!fieldName) {
            const properties = type.properties.jsEntries.filter((entry: JMapEntry<string, DataType>) => entry.getKey() !== "$schema")
                .map((entry: JMapEntry<string, DataType>) => this.getView(entry.getValue())).join('');
            content = this.getHtmlElement(fieldId, properties, isOptional, false);
        } else {
            const properties = type.properties.jsEntries.filter((entry: JMapEntry<string, DataType>) => entry.getKey() !== "$schema")
                .map((entry: JMapEntry<string, DataType>) => this.getView(entry.getValue())).join('');
            content = `<div class="property" ${isOptional ? 'disabled' : ''} id="${fieldId}"><label>${fieldName}: </label><br>${description}<br>${properties}</div>`;
            content = this.getHtmlElement(fieldId, content, isOptional, true);
        }
        return content;
    }

    private getField(type: StringType, isOptional: boolean): string {
        const fieldName = type.title;
        const fieldId = this.cleanupString(type.uniqId);
        const description = type.description || '';
        let content = '';
        if (!fieldName) {
            content = `<div> <input type="text" id="${fieldId}" ${isOptional ? 'disabled' : ''}><br>${description}</div>`;
            content = this.getHtmlElement(fieldId, content, isOptional, false);
        } else {
            content = `<div><label>${fieldName}: </label>` +
                `<input type="text" id="${fieldId}" ${isOptional ? 'disabled' : ''}><br>${description}</div>`;
            content = this.getHtmlElement(fieldId, content, isOptional, false);
        }
        this.scripts += this.getFieldListener(fieldId, type.uniqId);
        return content;
    }

    private getIntegerField(type: IntegerType, isOptional: boolean): string {
        const fieldName = type.title;
        const fieldId = this.cleanupString(type.uniqId);
        const description = type.description || '';
        let content = '';
        if (!fieldName) {
            content = `<div><input type="number" id="${fieldId}" ${isOptional ? 'disabled' : ''} oninput="this.value = Math.round(this.value);"><br>${description}</div>`;
            content = this.getHtmlElement(fieldId, content, isOptional, false);
        } else {
            content = `<div><label>${fieldName}: </label>` +
                `<input type="number" id="${fieldId}" ${isOptional ? 'disabled' : ''} oninput="this.value = Math.round(this.value);"><br>${description}</div>`;
            content = this.getHtmlElement(fieldId, content, isOptional, false);
        }
        return content;
    }

    private getNumericalField(type: NumberType, isOptional: boolean): string {
        const fieldName = type.title;
        const fieldId = this.cleanupString(type.uniqId);
        const description = type.description || '';
        let content = '';
        if (!fieldName) {
            content = `<div><input type="number" id="${fieldId}" ${isOptional ? 'disabled' : ''}><br>${description}</div>`;
            content = this.getHtmlElement(fieldId, content, isOptional, false);
        } else {
            content = `<div><label>${fieldName}: </label>` +
                `<input type="number" id="${fieldId}" ${isOptional ? 'disabled' : ''}><br>${description}</div>`;
            content = this.getHtmlElement(fieldId, content, isOptional, false);
        }
        return content;
    }

    private getFlagField(type: BooleanType, isOptional: boolean): string {
        const fieldName = type.title;
        const fieldId = this.cleanupString(type.uniqId);
        const description = type.description || '';
        let content = '';
        if (!fieldName) {
            content =
                `<div><label>Value: </label><input type="checkbox" id="${fieldId}" ${isOptional ? 'disabled' : ''}><br>` +
                `${description}</div>`;
            content = this.getHtmlElement(fieldId, content, isOptional, false);
        } else {
            content =
                `<div><label>${fieldName}</label>: <input type="checkbox" id="${fieldId}" ${isOptional ? 'disabled' : ''}><br>` +
                `${description}</div>`;
            content = this.getHtmlElement(fieldId, content, isOptional, false);
        }
        this.scripts += this.getFlagListener(fieldId, type.uniqId);
        return content;
    }

    private getListField(type: EnumType, isOptional: boolean): string {
        const fieldName = type.title;
        const description = type.description || '';
        const fieldId = this.cleanupString(type.uniqId);
        const listItems = type.values;
        let content = '';
        if (!fieldName) {
            content = `<div ${isOptional ? 'disabled' : ''}><select id="${fieldId}" name="${type.hashCode()}">`;
            listItems.forEach((item: any) => content += `<option value="${item}">${item}</option>`);
            content += `</select><br><br></div>`;
            content = this.getHtmlElement(fieldId, content, isOptional, false);
        } else {
            content = `<div ${isOptional ? 'disabled' : ''}><label>${fieldName}:</label>` +
                `<select id="${fieldId}" name="${fieldName}" id="${fieldName}">`;
            listItems.forEach((item: any) => content += `<option value="${item}">${item}</option>`);
            content += `</select><br><br></div>`;
            content = this.getHtmlElement(fieldId, content, isOptional, false);
        }
        this.scripts += this.getListListener(fieldId, type.uniqId);
        return content;
    }

    private getDynamicArray(type: ArrayType, isOptional: boolean): string {
        const fieldName = type.title;
        const description = type.description || '';
        const fieldId = this.cleanupString(type.uniqId);
        let content = '';
        if (!fieldName) {
            const funName = `add${fieldId}`;
            content = `<div id="${fieldId}" ${isOptional ? 'disabled' : ''}>` +
                `<button onclick="${funName}()">Add</button>` +
                `<div id="${fieldId}-elements"> <p>Elements:</p> </div></div>`;
            const addScript = `function ${funName}() {` +
                `        const newBlock = '<div><button onclick="this.parentNode.remove()">Delete</button>${this.getView(type.items)}</div>';` +
                `        document.getElementById('${fieldId}-elements').insertAdjacentHTML('beforeend', newBlock);` +
                `    }`;
            this.scripts += addScript;
            content = this.getHtmlElement(fieldId, content, isOptional, false);
        } else {
            const funName = `add${fieldId}`;
            content = `<div id="${fieldId}" ${isOptional ? 'disabled' : ''}><label>${fieldName}:</label><br> ` +
                `<button onclick="${funName}()">Add</button>` +
                `<div id="${fieldName}-elements"> <p>Elements:</p> </div></div>`;
            const addScript = `function ${funName}() {` +
                `        const newBlock = '<div><button onclick="this.parentNode.remove()">Delete</button>${this.getView(type.items)}</div>';` +
                `        document.getElementById('${fieldName}-elements').insertAdjacentHTML('beforeend', newBlock);` +
                `    }`;
            this.scripts += addScript;
            content = this.getHtmlElement(fieldId, content, isOptional, false);
        }
        return content;
    }

    private getStyle(): string {
        return `<style>` +
            `    .property {` +
            `       border: 1px solid black;` +
            `       padding: 10px;` +
            `       margin: 10px;` +
            `       overflow: hidden;` +
            `    }` +
            `    .div {` +
            `       padding: 10px;` +
            `       margin: 10px;` +
            `       overflow: hidden;` +
            `    }` +
            `    .elementToCollapse {` +
            `       background-color: lightblue;` +
            `       padding: 20px;` +
            `       margin: 20px;` +
            `       overflow: hidden;` +
            `       transition: height 0.3s ease;` +
            `   }` +
            `   .arrow-up::before {` +
            `       content: "\\25B2"; /* Стрелка вверх */` +
            `   }` +
            `   .arrow-down::before {` +
            `       content: "\\25BC"; /* Стрелка вниз */` +
            `   }` +
            `   .collapseButton {` +
            `       border: none;` +
            `       background-color: transparent;` +
            `       font-size: 16px;` +
            `       cursor: pointer;` +
            `       padding: 5px;` +
            `       outline: none;` +
            `       margin-right: 10px;` +
            `   }` +
            `body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #202124;
                color: #ffffff;
            }
            .container {
                max-width: 800px;
                margin: 20px auto;
                background-color: #2e2e2e;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
            }
            .property {
                border: 1px solid #424242;
                border-radius: 4px;
                margin-bottom: 10px;
                padding: 10px;
            }
            .property label {
                font-weight: bold;
                color: #ffffff;
            }
            .property.disabled {
                opacity: 0.6;
            }
            .property .collapseButton {
                border: none;
                background-color: transparent;
                font-size: 16px;
                cursor: pointer;
                padding: 5px;
                outline: none;
                margin-right: 10px;
                color: #ffffff;
            }
            .div {
                margin-top: 10px;
            }
            .div label {
                font-weight: normal;
                color: #ffffff;
            }
            .div input[type="text"],
            .div input[type="number"],
            .div select {
                width: 100%;
                padding: 5px;
                margin-top: 5px;
                border-radius: 4px;
                border: 1px solid #424242;
                box-sizing: border-box;
                background-color: #424242;
                color: #ffffff;
            }
            .div input[type="checkbox"] {
                margin-top: 5px;
            }
            .div button {
                margin-top: 10px;
                padding: 5px 10px;
                border: none;
                border-radius: 4px;
                background-color: #007bff;
                color: #ffffff;
                cursor: pointer;
            }
            .div button:hover {
                background-color: #0056b3;
            }
            .property button {
                margin-top: 10px;
                padding: 5px 10px;
                border: none;
                border-radius: 4px;
                background-color: #007bff;
                color: #ffffff;
                cursor: pointer;
            }
    
            .property button:hover {
                background-color: #0056b3;
            }` +
            `</style>`;
    }

    private getHtmlElement(fieldId: string, content: string, isOptional: boolean, needBorder: boolean): string {
        const classProperty = needBorder ? 'class="property"' : 'class="div"';
        if (isOptional) {
            const checkbox = `<input type="checkbox" id="${fieldId}-checkbox">Enable optional field`;
            this.scripts += this.getScriptLinksCheckBoxToElement(`${fieldId}-checkbox`, fieldId);
            const optionalControl = `<div>${checkbox}</div>`;
            return `<div ${classProperty}>${content}${optionalControl}</div>`;
        }
        return `<div ${classProperty}>${content}</div>`;
    }

    private getScriptLinksCheckBoxToElement(checkboxId: string, elementId: string): string {
        return `document.getElementById("${checkboxId}").addEventListener("change", function() {` +
            `            const element = document.getElementById("${elementId}");` +
            `            element.disabled = !this.checked;` +
            `        });`;
    }

    private getFieldListener(elementId: string, uniqId: string): string {
        return `document.getElementById("${elementId}")?.addEventListener("change", function() {` +
            `            console.log("${uniqId}");` +
            `            vscode.postMessage({id: "${uniqId}", value: document.getElementById("${elementId}").value});`+
            `});`;
    }

    private getFlagListener(elementId: string, uniqId: string): string {
        return `document.getElementById("${elementId}")?.addEventListener("change", function() {` +
            `            console.log("${uniqId}");` +
            `            vscode.postMessage({id: "${uniqId}", value: document.getElementById("${elementId}").checked});`+
            `});`;
    }

    private getListListener(elementId: string, uniqId: string): string {
        return `document.getElementById("${elementId}")?.addEventListener("change", function() {` +
            `            console.log("${uniqId}");` +
            `            const selectElement = document.getElementById("${elementId}");` +
            `            const selectedOptionText = selectElement?.options[selectElement?.selectedIndex].text;` +
            `            vscode.postMessage({id: "${uniqId}", value: selectedOptionText});`+
            `});`;
    }

    private getCollapseScript(fieldId: string): string {
        const collapseButtonId = `collapseButton${fieldId}`;
        const collapseFun = `toggleCollapse${fieldId}()`;
        return `function ${collapseFun} {` +
            `  var element = document.getElementById("${fieldId}");` +
            `  var button = document.getElementById("${collapseButtonId}");` +
            `  if (element.style.height === "50px" || element.offsetHeight === 0) {` +
            `    element.style.height = "auto";` +
            `    button.classList.remove("arrow-down");` +
            `    button.classList.add("arrow-up");` +
            `    button.textContent = "Collapse";` +
            `  } else {` +
            `    element.style.height = "50px";` +
            `    button.classList.remove("arrow-up");` +
            `    button.classList.add("arrow-down");` +
            `    button.textContent = "Expand";` +
            `  }` +
            `}`;
    }

    private getCollapseButton(fieldId: string): string {
        const collapseButtonId = `collapseButton${fieldId}`;
        const collapseFun = `toggleCollapse${fieldId}()`;
        return `<button onclick="${collapseFun}" id="${collapseButtonId}" class="arrow-up">Collapse</button>`;
    }

    private cleanupString(input: string): string {
        return input.replaceAll(" ", "").replaceAll("-", "");
    }
}
