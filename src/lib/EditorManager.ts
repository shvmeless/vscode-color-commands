// IMPORTS
import { TextEditor, window } from 'vscode'

// CLASS
export class EditorManager {

  // PROPERTIES
  private editor: TextEditor

  // CONSTRUCTOR
  constructor() {
    const editor = window.activeTextEditor
    if (editor === undefined) throw new Error('No active editor found.')
    this.editor = editor
  }

  // METHOD
  public replaceAllSelections(callback: (text: string) => string | undefined): void {
    this.editor.edit((builder) => {
      for (const selection of this.editor.selections) {
        const text = this.editor.document.getText(selection)
        const output = callback(text)
        if (output === undefined) continue
        builder.replace(selection, output)
      }
    })
  }

}
