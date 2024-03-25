import { Habitante } from './Habitantes.ts'
import { Hands } from './Hands.ts'
import { Say } from "./Say.ts";
import { BaseSay } from "./Say.ts";
import { Sex } from './types.ts'

abstract class Human extends Habitante implements Hands {
    public numberOfHands: number;

    constructor(name: string, sex: Sex, amountOfLegs: number, numberOfHands: number, say: Say) {
        super(name, sex, amountOfLegs, say ?? new BaseSay())
        this.numberOfHands = numberOfHands
    }

}

class Man extends Human {
    constructor(name: string, amountOfLegs: number, numberOfHands: number) {
        super(name, 'Male', amountOfLegs, numberOfHands, new BaseSay())
    }
}

class Woman extends Human {
    constructor(name: string, amountOfLegs: number, numberOfHands: number, say: Say) {
        super(name, 'Female', amountOfLegs, numberOfHands, say)
    }
}

export {
    Man,
    Woman
}