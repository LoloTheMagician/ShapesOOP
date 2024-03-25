import { Sex } from './types.ts'
import { Say } from "./Say.ts";

export abstract class Habitante {
    private life: number;
    private name: string;
    private sex: Sex;
    private legs: number;
    private habitantSays: Say;
    private says: () => string

    constructor(name: string, sex: Sex, legs: number, habitantSays: Say) {
        this.life = 100
        this.name = name
        this.sex = sex
        this.legs = legs
        this.habitantSays = habitantSays
        this.says = this.habitantSays.say
    }

    public get getLife() {
        return this.life
    }

    public displayLife() {
        return `${this.name} life is ${this.life}`
    }

    public set setLife(newLife: number) {
        this.life = newLife
    }

    public get getName() {
        return this.name
    }

    public set setName(newName: string) {
        this.name = newName
    }

    public get getSex() {
        return this.sex
    }

    public set setSex(newSex: Sex) {
        this.sex = newSex
    }

    public get getLegs() {
        return this.legs
    }

    public set setLegs(newLegs: number) {
        this.legs = newLegs
    }

    public saySomething() {
        return `${this.name} says ${this.says()}`
    }
}