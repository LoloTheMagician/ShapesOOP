import { Habitante } from './Habitantes.ts'
import { Sex } from "./types.ts";
import { Say } from './Say.ts'
import { Attack } from './Attack.ts'

abstract class Animal extends Habitante {
    attackBehaviour: Attack;

    constructor(name: string, sex: Sex, numberOfPawns: number, says: Say, attackBehaviour: Attack) {
        super(name, sex, numberOfPawns, says)
        this.attackBehaviour = attackBehaviour
    }

    public toAttack(enemy: Animal) {
        enemy.setLife = enemy.getLife - this.attackBehaviour.damage
    }

}

export {
    Animal
}