import { Animal } from "./Animal.ts";
import { Attack } from "./Attack.ts";
import { CanineSay } from "./Say.ts";
import { Sex } from './types.ts';

class Dog extends Animal {

    constructor(name: string, sex: Sex, amountOfPaws: number, attackBehaviour: Attack = new Attack) {
        super(name, sex, amountOfPaws, new CanineSay(), attackBehaviour)
    }

}

export {
    Dog
};
