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
