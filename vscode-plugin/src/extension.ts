// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as jsonForms from 'json-forms-core';
import JsonTreeBuilder = jsonForms.ru.itmo.json_forms.core.document.JsonTreeBuilder;
import { HtmlAdapter } from './htmlAdapter';
import { AdapterController } from './adapterController';

var schemaPath = "";
var jsonPath = "";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "json-forms" is now active!');

	let loadSchema = vscode.commands.registerCommand('json-forms.loadschema', async () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const filePath = await vscode.window.showOpenDialog({
			canSelectFiles: true,
			canSelectFolders: false,
			canSelectMany: false,
			openLabel: 'Choose schema',
		});
		
		schemaPath = filePath![0].fsPath;
		vscode.window.showInformationMessage(`Loaded schema: ${schemaPath}`);
	});

	let viewJson = vscode.commands.registerCommand('json-forms.viewjson', async () => {
		jsonPath = vscode.window.activeTextEditor?.document.fileName!;
		initLib();
	});

	// viewjson

	context.subscriptions.push(loadSchema,viewJson);
}

function initLib() {
    const rawSchema = fs.readFileSync(schemaPath, { encoding: 'utf-8' });
	const rawJson = fs.readFileSync(jsonPath, { encoding: 'utf-8' });

	const document = JsonTreeBuilder.build(rawJson, rawSchema);

    const htmlAdapter = new HtmlAdapter();
    const controller = new AdapterController();
    controller.startAdapterWith(document, htmlAdapter);

	const panel = vscode.window.createWebviewPanel(
        'webview', // Уникальный идентификатор для веб-представления
        'Json UI', // Заголовок веб-представления
        vscode.ViewColumn.Beside, // Позиция отображения панели
        {
            enableScripts: true // Разрешаем выполнение сценариев в веб-представлении
        }
    );

	panel.webview.onDidReceiveMessage(async message => {
		htmlAdapter.setView(document.root, message.id, message.value);
		const newJson = document.getJson();
		console.log(newJson);
		fs.writeFileSync(jsonPath, newJson);
	});

    // Получаем путь к файлу index.html в расширении
    const htmlPath = '/home/donebd/jsonFormsPlugin/json-forms/preview.html';

    // Читаем содержимое файла index.html
    const htmlContent = fs.readFileSync(htmlPath);
        // Устанавливаем HTML-контент в веб-представление
	panel.webview.html = htmlContent.toString();
}

// This method is called when your extension is deactivated
export function deactivate() {}
