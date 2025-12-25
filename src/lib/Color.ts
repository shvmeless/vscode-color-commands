// IMPORTS
import { colord, Colord } from 'colord'

// CLASS
export class Color {

  // PROPERTIES
  private readonly color: Colord

  // CONSTRUCTOR
  constructor(str: string) {
    const color = colord(str)
    if (!color.isValid()) throw new Error('Invalid color string.')
    this.color = color
  }

  // METHOD
  public toHex(): string {
    return this.color.toHex()
  }

  // METHOD
  public toRGB(): string {
    return this.color.toRgbString()
  }

  // METHOD
  public toHSL(): string {
    return this.color.toHslString()
  }

}
