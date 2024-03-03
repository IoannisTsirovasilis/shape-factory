import { Shape } from './Shape';

export class Square implements Shape {
  readonly sideLength: number;
  constructor(sideLength: number) {
    if (sideLength <= 0) {
      throw new Error('Width must be greater than 0');
    }
    this.sideLength = sideLength;
  }

  perimeter(): number {
    return this.sideLength * 4;
  }
  area(): number {
    return this.sideLength ** 2;
  }
}
