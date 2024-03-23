import { Shape } from "./Shape.ts"
import { Area } from '../Operations/Area.ts'

class Triangle extends Shape implements Area {

    private heigth: number

    constructor(sideLength: number, heigth: number) {
        super('Triangle', 3, sideLength)
        this.heigth = heigth
    }

    calcArea(): number {
        return (this.sideLength * this.heigth) / 2
    }

    public getHeigth = () => this.heigth

    public setHeigth(newHeigth: number) {
        this.heigth = newHeigth
        return this.getHeigth()
    }
}

export {
    Triangle
}