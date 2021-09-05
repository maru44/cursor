// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import path = require('path');
import * as vscode from 'vscode';

let getPath = (args: any) => {
	let path = null;
	if (args && args.length > 0) {
		path = args[0].fsPath;
	}
	if (!path) path = vscode.window.activeTextEditor?.document.fileName;
	vscode.window.registerFileDecorationProvider
	return path;
}

class SampleHoverProvider2 {
	provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
		console.log("hovering!!");
		let wordRange = document.getWordRangeAtPosition(position, /[a-zA-Z0-9_.\[\]]+/);
        if (wordRange === undefined) return Promise.reject("no word here");

        let currentWord = document.lineAt(position.line).text.slice(wordRange.start.character, wordRange.end.character);
        return Promise.resolve(new vscode.Hover(currentWord));
	}
}

export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "cursor" is now active!');

	let disposable = vscode.commands.registerCommand('cursor.cursor', (...args) => {
		var fullPath = getPath(args);
		var extName = path.extname(fullPath);
        var fileName = path.basename(fullPath, extName);
		// vscode.window.setStatusBarMessage(fileName, 2000);
		// Promise.resolve(new vscode.Hover(fileName));
		console.log(fullPath);
	});
	context.subscriptions.push(disposable);

	/*   sample   */
	disposable = vscode.commands.registerCommand('cursor.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from cursor!');
	});
	context.subscriptions.push(disposable);

	// clause when
	disposable = vscode.commands.registerCommand('cursor.explorer', (...args) => {
		console.log("explorer");
		var fullPath = getPath(args);
		var extName = path.extname(fullPath);
        var fileName = path.basename(fullPath, extName);
		// vscode.window.setStatusBarMessage(fileName, 2000);
		// Promise.resolve(new vscode.Hover(fileName));
		console.log(fullPath);
	});
	context.subscriptions.push(disposable);

	/*   hover   */
	// context.subscriptions.push(vscode.languages.registerHoverProvider('cursor.hover', new SampleHoverProvider));
	context.subscriptions.push(vscode.languages.registerHoverProvider("*", new SampleHoverProvider2));
}

// this method is called when your extension is deactivated
export function deactivate() {}
