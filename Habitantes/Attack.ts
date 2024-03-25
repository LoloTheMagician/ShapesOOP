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

class BiteAttack extends Attack {
    damage: number = 25;
}

class ClawAttack extends Attack {
    damage: number = 15;
}


export type {
    IAttack
}

export {
    Attack,
    BiteAttack,
    ClawAttack
}
