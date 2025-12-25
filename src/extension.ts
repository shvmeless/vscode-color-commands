// IMPORTS
import { ExtensionContext } from 'vscode'
import { CommandRegister } from './lib/CommandRegister'
import * as commands from './commands'

// ACTIVATE
export function activate(context: ExtensionContext) {

  const register = new CommandRegister(context)

  register.push('to-hexadecimal', commands.toHex)
  register.push('to-rgb', commands.toRGB)
  register.push('to-hsl', commands.toHSL)
  register.push('set-hue', commands.setHue)
  register.push('set-saturation', commands.setSaturation)
  register.push('set-lightness', commands.setLightness)
  register.push('set-alpha', commands.setAlpha)

}

// DEACTIVATE
export function deactivate() {}
