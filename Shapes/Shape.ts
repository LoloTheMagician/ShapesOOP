import { Perimeter } from '../Operations/Perimeter.ts'

abstract class Shape implements Perimeter {

    protected name: string;
    protected sides: number;
    protected sideLength: number;

    constructor(name: string, sides: number, sideLength: number) {
        this.name = name
        this.sides = sides
        this.sideLength = sideLength
    }

    public calcPerimeter() {
        return this.sideLength * this.sideLength
    }

    public getSides = () => this.sides

    protected setSides(newSides: number) {
        this.sides = newSides
        return this.getSides()
    }

    public getName = () => this.name

    protected setName(newName: string) {
        this.name = newName
        return this.getName()
    }

    public getSideLength = () => this.sideLength

    public setSideLength(newSideLength: number) {
        this.sideLength = newSideLength
        return this.getSideLength()
    }
}

export {
    Shape
}