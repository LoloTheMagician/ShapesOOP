import { Woman } from "./Human.ts";
import { CatSay } from "./Say.ts";

class CatWoman extends Woman {

    constructor(name: string, numberOfLegs: number, numberOfHands: number) {
        super(name, numberOfLegs, numberOfHands, new CatSay())
    }


}

export {
    CatWoman
}