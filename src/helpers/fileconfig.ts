import * as vscode from 'vscode';

/** Get configuration of vs code. */
// export const getConfig = (section?: string) => {
//   return vscode.workspace.getConfiguration(section);
// };
  
/** Get list of configuration entries of package.json */
// export const getConfigProperties = (): { [config: string]: any } => {
//   return vscode.extensions.getExtension('maru44.cursor')!.packageJSON
//     .contributes.configuration.properties;
// };

export const performPatch = () => {
  const config = vscode.workspace.getConfiguration("maru44.cursor");
  if (!isProperlyConfigured(config)) {
    return vscode.window.showInformationMessage("not configured")
  }
  console.log(config);
}

const patchHtml = async (config: any) => {
  console.log(config);
  let res = "";
  for (const item of config.imports) {
    const imp = await patchHtmlForItem(item);
    if (imp) res += imp;
  }
}

const patchHtmlForItem = (url: string) => {
  if (!url) return "";
  if (typeof url !== "string") return "";

}

const isProperlyConfigured = (config: any) => {
  return config && config.imports && config.imports instanceof Array;
}

// <div class="monaco-list-row" role="treeitem" data-index="13" data-last-element="false" aria-setsize="6" aria-posinset="5" id="list_id_1_13" aria-selected="false" aria-label="s3handler.go" aria-level="4" draggable="true" style="top: 286px; height: 22px; line-height: 22px;">
//   <div class="monaco-tl-row">
//     <div class="monaco-tl-indent" style="width: 16px;">
//       <div class="indent-guide" style="width: 8px"></div>
//       <div class="indent-guide active" style="width: 8px"></div>
//     </div>
//     <div class="monaco-tl-twistie" style="padding-left: 24px;"></div>
//     <div class="monaco-tl-contents">
//       <div class="monaco-icon-label file-icon s3handler.go-name-file-icon go-ext-file-icon ext-file-icon go-lang-file-icon explorer-item" style="display: flex;">
//         <div class="monaco-icon-label-container" title="maru44/animar/internal/pkg/infrastructure/s3handler.go">
//           <span class="monaco-icon-name-container">  <===== js & css to here
//             <a class="label-name">
//               <span class="monaco-highlighted-label">
//                 <span>s3handler.go</span>
//               </span>
//             </a>
//           </span>
//           <span class="monaco-icon-description-container">
//           </span>
// </div></div></div></div>
