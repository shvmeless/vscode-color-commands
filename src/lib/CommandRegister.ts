// IMPORTS
import { ExtensionContext, commands } from 'vscode'

// CLASS
export class CommandRegister {

  // PROPERTIES
  private readonly context: ExtensionContext

  // CONSTRUCTOR
  constructor(context: ExtensionContext) {
    this.context = context
  }

  // METHOD
  public push(command: string, callback: () => unknown): void {
    const id = `shvmeless.color-commands.${command}`
    const item = commands.registerCommand(id, callback)
    this.context.subscriptions.push(item)
  }

}
