// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { importExtension } from './css';

const cssExt = vscode.extensions.getExtension('be5invis.vscode-custom-css');

export function activate(context: vscode.ExtensionContext) {
	const cssExports = importExtension(cssExt!);

	vscode.commands.executeCommand(cssExports.installCssCustomCSS);
}

// this method is called when your extension is deactivated
export function deactivate() {}
