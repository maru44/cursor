import * as vscode from 'vscode';

export const importExtension = (ext: vscode.Extension<any>) => {
    const importedExtension = ext.exports;
    return importedExtension;
};

export const activeExtension = async (ext: vscode.Extension<any>) => {
    await ext.activate();
    return 
}