// IMPORTS
import { colord } from 'colord'
import { EditorManager } from './lib/EditorManager'

// COMMAND
export function toHex(): void {
  const manager = new EditorManager()
  manager.replaceAllSelections((text: string) => {
    const color = colord(text)
    if (!color.isValid()) return
    return color.toHex()
  })
}
