import { Perimeter } from '../Operations/Perimeter.ts'
import { Area } from '../Operations/Area.ts'


class Circle implements Area, Perimeter {

    private name: string = 'Circle'
    private radius: number
    private diameter: number
    private PI: number = parseInt(Math.PI.toFixed(2))

    constructor(radius: number) {
        this.radius = radius
        this.diameter = this.radius + this.radius
    }

    calcPerimeter(): number {
        const perimeter = this.PI * this.diameter
        return parseInt(perimeter.toFixed(2))
    }

    calcArea(): number {
        const area = this.PI * (this.radius ^ 2)
        return parseInt(area.toFixed(2))
    }

    public getName = () => this.name

    public getRadius = () => this.radius

    public setRadius(newRadius: number) {
        this.radius = newRadius
        return this.getRadius()
    }

    public getDiameter = () => this.diameter

    public getPI = () => this.PI

    public get getradius(): number {
        return this.radius
    }
}

export {
    Circle
}