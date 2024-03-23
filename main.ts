import { Circle } from "./Circle/Circle.ts";
import { Square } from './Shapes/Square.ts'
import { Triangle } from './Shapes/Triangle.ts'

const triangle = new Triangle(3, 4)
const square = new Square(5)
const circle = new Circle(4)

console.log(
    triangle.calcArea(),
    triangle.setHeigth(5),
    triangle.calcArea(),
    square.calcArea(),
    circle.calcArea(),
)