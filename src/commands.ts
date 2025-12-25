// IMPORTS
import { EditorManager } from './lib/EditorManager'
import { Color } from './lib/Color'

// COMMAND
export function toHex(): void {
  const manager = new EditorManager()
  manager.replaceAllSelections((str: string) => {
    return new Color(str).toHex()
  })
}

// COMMAND
export function toRGB(): void {
  const manager = new EditorManager()
  manager.replaceAllSelections((str: string) => {
    return new Color(str).toRGB()
  })
}

// COMMAND
export function toHSL(): void {
  const manager = new EditorManager()
  manager.replaceAllSelections((str: string) => {
    return new Color(str).toHSL()
  })
}

// COMMAND
export async function setHue(): Promise<void> {
  const manager = new EditorManager()
  const input = await manager.askForNumber({ prompt: 'Enther the hue value:', min: 0, max: 360 })
  if (input === undefined) return
  manager.replaceAllSelections((str: string) => {
    return new Color(str).setHue(input).toString()
  })
}
