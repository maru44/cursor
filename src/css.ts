import * as vscode from 'vscode';

export const importExtension = (ext: vscode.Extension<any>) => {
    console.log(ext);
    const importedExtension = ext.exports;
    return importedExtension;
};
