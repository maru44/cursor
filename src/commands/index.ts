import { activeFilename } from "./hover"
import * as vscode from 'vscode';

const commands = {
    activeFilename,
};

// export const registered = Object.keys(commands).map((cName) => {
//     console.log(cName);
//     const callCommand = () => commands[cName]();
//     return vscode.commands.registerCommand(
//         `cursor.${cName}`,
//         callCommand,
//     );
// });

export const register = () => {
    return vscode.commands.registerCommand(
        `cursor.activeFilename`,
        activeFilename,
    )
}
