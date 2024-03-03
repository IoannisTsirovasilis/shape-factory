import { Square } from './Square';
import { Rectangle } from './Rectangle';
import { Circle } from './Circle';
import { Shape } from './Shape';
import { ShapeType } from './ShapeTypeEnum';

export abstract class ShapeFactory {
  static createShape(type: ShapeType, ...args: number[]): Shape {
    switch (type) {
      case ShapeType.Circle:
        return new Circle(args[0]);
      case ShapeType.Square:
        return new Square(args[0]);
      case ShapeType.Rectangle:
        return new Rectangle(args[0], args[1]);
      default:
        throw new Error('Invalid shape type');
    }
  }
}
