import { Shape } from './Shape.ts'
import { Area } from '../Operations/Area.ts'

class Square extends Shape implements Area {

    constructor(sideLength: number) {
        super('Square', 4, sideLength)
    }

    calcArea(): number {
        return this.sideLength ^ 2
    }

}

export {
    Square
}