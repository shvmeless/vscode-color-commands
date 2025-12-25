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

// COMMAND
export async function setSaturation(): Promise<void> {
  const manager = new EditorManager()
  const input = await manager.askForNumber({ prompt: 'Enther the saturation value:', min: 0, max: 1 })
  if (input === undefined) return
  manager.replaceAllSelections((str: string) => {
    return new Color(str).setSaturation(input).toString()
  })
}

// COMMAND
export async function setLightness(): Promise<void> {
  const manager = new EditorManager()
  const input = await manager.askForNumber({ prompt: 'Enther the lightness value:', min: 0, max: 1 })
  if (input === undefined) return
  manager.replaceAllSelections((str: string) => {
    return new Color(str).setLightness(input).toString()
  })
}

// COMMAND
export async function setAlpha(): Promise<void> {
  const manager = new EditorManager()
  const input = await manager.askForNumber({ prompt: 'Enther the alpha value:', min: 0, max: 1 })
  if (input === undefined) return
  manager.replaceAllSelections((str: string) => {
    return new Color(str).setAlpha(input).toString()
  })
}

// COMMAND
export async function rotate(): Promise<void> {
  const manager = new EditorManager()
  const input = await manager.askForNumber({ prompt: 'Enter the number of degrees you want to rotate the color:', min: -360, max: 360 })
  if (input === undefined) return
  manager.replaceAllSelections((str: string) => {
    return new Color(str).rotate(input).toString()
  })
}

// COMMAND
export async function saturate(): Promise<void> {
  const manager = new EditorManager()
  const input = await manager.askForNumber({ prompt: 'Enter the value to increase saturation:', min: 0, max: 1 })
  if (input === undefined) return
  manager.replaceAllSelections((str: string) => {
    return new Color(str).saturate(input).toString()
  })
}

// COMMAND
export async function desaturate(): Promise<void> {
  const manager = new EditorManager()
  const input = await manager.askForNumber({ prompt: 'Enter the value to decrease saturation:', min: 0, max: 1 })
  if (input === undefined) return
  manager.replaceAllSelections((str: string) => {
    return new Color(str).desaturate(input).toString()
  })
}

// COMMAND
export async function lighten(): Promise<void> {
  const manager = new EditorManager()
  const input = await manager.askForNumber({ prompt: 'Enter the value to increase lightness:', min: 0, max: 1 })
  if (input === undefined) return
  manager.replaceAllSelections((str: string) => {
    return new Color(str).lighten(input).toString()
  })
}

// COMMAND
export async function darken(): Promise<void> {
  const manager = new EditorManager()
  const input = await manager.askForNumber({ prompt: 'Enter the value to decrease lightness:', min: 0, max: 1 })
  if (input === undefined) return
  manager.replaceAllSelections((str: string) => {
    return new Color(str).darken(input).toString()
  })
}

// COMMAND
export async function invert(): Promise<void> {
  const manager = new EditorManager()
  manager.replaceAllSelections((str: string) => {
    return new Color(str).invert().toString()
  })
}
