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

  // METHOD
  public async askForNumber(params: {
    prompt: string
    min: number
    max: number
  }): Promise<number | undefined> {

    const { prompt, min, max } = params

    let input = await window.showInputBox({
      prompt,
      placeHolder: `${min}-${max}`,
      validateInput: (input: string) => {
        input = input.replace(/\s/g, '')
        const number = Number.parseFloat(input)
        if (isNaN(number)) return 'Please enter a valid number.'
        if (number < min || number > max) return `Please enter a number between ${min} and ${max}.`
        return undefined
      },
    })

    if (input === undefined) return

    input = input.replace(/\s/g, '')
    return Number.parseFloat(input)

  }

}
