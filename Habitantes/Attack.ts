import { Habitante } from "./Habitantes.ts";

interface IAttack {
    damage: number
    toAttack(enemy: Habitante): void
}

class Attack implements IAttack {
    damage: number = 10;

    toAttack(enemy: Habitante): void {
        enemy.setLife = enemy.getLife - this.damage
    }

}



export type {
    IAttack
}

export {
    Attack
}
