import { Dog } from "./Dog.ts";
import { Cat } from "./Cat.ts";
import { CatWoman } from './CatWoman.ts'
import { ClawAttack, BiteAttack } from './Attack.ts'

const mujerGato = new CatWoman('Gatubela', 2, 2)
console.log(
    mujerGato.saySomething()
)

const gato = new Cat('Nieves', 'Female', 4)
const perro = new Dog('Tobby', 'Male', 4, new ClawAttack())

console.log(gato.displayLife())
perro.toAttack(gato)
console.log(gato.displayLife())
perro.setAttackBehaviour = new BiteAttack()
perro.toAttack(gato)
console.log(gato.displayLife())


