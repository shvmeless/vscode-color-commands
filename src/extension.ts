// IMPORTS
import { ExtensionContext } from 'vscode'
import { CommandRegister } from './lib/CommandRegister'
import * as commands from './commands'

// ACTIVATE
export function activate(context: ExtensionContext) {

  const register = new CommandRegister(context)

  register.push('to-hexadecimal', commands.toHex)

}

// DEACTIVATE
export function deactivate() {}
