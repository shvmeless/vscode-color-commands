// IMPORTS
import { colord, Colord, getFormat } from 'colord'

// CLASS
export class Color {

  // PROPERTIES
  private color: Colord
  private readonly format: 'hex' | 'rgb' | 'hsl'

  // CONSTRUCTOR
  constructor(str: string) {
    const color = colord(str)
    if (!color.isValid()) throw new Error('Invalid color string.')
    const format = getFormat(str)
    if (format !== 'hex' && format !== 'rgb' && format !== 'hsl') throw new Error('Invalid color format.')
    this.color = color
    this.format = format
  }

  // METHOD
  public toString(): string {
    if (this.format === 'rgb') return this.color.toRgbString()
    if (this.format === 'hsl') return this.color.toHslString()
    return this.color.toHex()
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

  // METHOD
  public setHue(value: number): this {
    this.color = this.color.hue(value)
    return this
  }

}
