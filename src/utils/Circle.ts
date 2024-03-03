import { Shape } from './Shape';

export class Circle implements Shape {
  readonly radius: number;
  constructor(radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
    this.radius = radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
