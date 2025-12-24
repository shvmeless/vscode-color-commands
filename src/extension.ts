// IMPORTS
import { ExtensionContext } from 'vscode'
import { CommandRegister } from './lib/CommandRegister'
import * as commands from './commands'

// ACTIVATE
export function activate(context: ExtensionContext) {

  const register = new CommandRegister(context)

  register.push('to-hexadecimal', commands.toHex)
  register.push('to-rgb', commands.toRGB)

}

// DEACTIVATE
export function deactivate() {}
