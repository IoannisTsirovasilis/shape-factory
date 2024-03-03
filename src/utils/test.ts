import { ShapeFactory } from './ShapeFactory';
import { ShapeType } from './ShapeTypeEnum';

const square = ShapeFactory.createShape(ShapeType.Square, 5);

const squareArea = square.area();
const squarePerimeter = square.perimeter();

console.log('square');
console.log(squareArea);
console.log(squarePerimeter);

const rectangle = ShapeFactory.createShape(ShapeType.Rectangle, 5, 10);

const rectangleArea = rectangle.area();
const rectanglePerimeter = rectangle.perimeter();

console.log('rectangle');
console.log(rectangleArea);
console.log(rectanglePerimeter);

const circle = ShapeFactory.createShape(ShapeType.Circle, 15);

const circleArea = circle.area();
const circlePerimeter = circle.perimeter();

console.log('circle');
console.log(circleArea);
console.log(circlePerimeter);
