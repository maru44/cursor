// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { activeExtension, importExtension } from './css';

const cssExt = vscode.extensions.getExtension('be5invis.vscode-custom-css');
// occured here or package.json's extensionsDependencies
// Cannot activate the 'cursor' extension because it depends on the 'Custom CSS and JS Loader' extension, which is not loaded. Would you like to reload the window to load the extension?

export function activate(context: vscode.ExtensionContext) {
	console.log("a");
	// await activeExtension(cssExt!);
	// console.log("b")
	// const cssExports = importExtension(cssExt!);
	// console.log("c");
	// vscode.commands.executeCommand(cssExports.installCssCustomCSS);
}

// this method is called when your extension is deactivated
export function deactivate() {}

// const initCursor = async () => {
// 	console.log("a")
// 	await activeExtension(cssExt!);
// 	console.log("b")
// 	const cssExports = importExtension(cssExt!);
// 	console.log("c");
// 	vscode.commands.executeCommand(cssExports.installCssCustomCSS);
// }