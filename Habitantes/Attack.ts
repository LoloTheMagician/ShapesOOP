import { Habitante } from "./Habitantes.ts";

interface IAttack {
    toAttack(enemy: Habitante): void
}

abstract class Attack implements IAttack {
    private damage: number;

    constructor(damage: number) {
        this.damage = damage
    }

    toAttack(enemy: Habitante): void {
        enemy.setLife = enemy.getLife - this.damage
    }

    public get getDamage() {
        return this.damage
    }

    public set setDamage(newDamage: number) {
        this.damage = newDamage
    }
}

class BaseAttack extends Attack {
    constructor() {
        super(10)
    }
}

class BiteAttack extends Attack {
    constructor() {
        super(25)
    }
}

class ClawAttack extends Attack {
    constructor() {
        super(15)
    }
}


export type {
    IAttack
}

export {
    Attack,
    BaseAttack,
    BiteAttack,
    ClawAttack,
}
