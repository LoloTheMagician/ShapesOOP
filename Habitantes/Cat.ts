import { Sex } from './types.ts'
import { CatSay } from "./Say.ts"
import { Animal } from "./Animal.ts"
import { Attack } from "./Attack.ts";

class Cat extends Animal {
    constructor(name: string, sex: Sex, amountOfPawns: number) {
        super(name, sex, amountOfPawns, new CatSay(), new Attack())
    }
}

export {
    Cat
}