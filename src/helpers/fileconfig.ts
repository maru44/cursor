import * as vscode from 'vscode';

/** Get configuration of vs code. */
export const getConfig = (section?: string) => {
  return vscode.workspace.getConfiguration(section);
};
  
/** Get list of configuration entries of package.json */
export const getConfigProperties = (): { [config: string]: any } => {
  return vscode.extensions.getExtension('PKief.material-icon-theme')!.packageJSON
    .contributes.configuration.properties;
};
