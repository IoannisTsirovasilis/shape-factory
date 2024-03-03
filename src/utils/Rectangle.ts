import { Shape } from './Shape';

export class Rectangle implements Shape {
  readonly width: number;
  readonly height: number;
  constructor(width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
    this.width = width;
    this.height = height;
  }

  perimeter(): number {
    return this.width * 2 + this.height * 2;
  }
  area(): number {
    return this.width * this.height;
  }
}
