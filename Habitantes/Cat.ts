import { Sex } from './types.ts'
import { CatSay } from "./Say.ts"
import { Animal } from "./Animal.ts"
import { Attack, BaseAttack } from "./Attack.ts";

class Cat extends Animal {
    constructor(name: string, sex: Sex, amountOfPawns: number, attackBehaviour: Attack = new BaseAttack()) {
        super(name, sex, amountOfPawns, new CatSay(), attackBehaviour)
    }
}

export {
    Cat
}