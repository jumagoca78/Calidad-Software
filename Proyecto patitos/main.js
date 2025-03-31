import { MallardDuck } from './MallardDuck.js';
import { FlyWithWings } from './FlyWithWings.js';
import { Quack } from './Quack.js';
import { FlyWithBalloon } from './FlyWithBalloon.js';
import { MuteQuack } from './MuteQuack.js';

const mallard = new MallardDuck(new FlyWithWings(), new Quack());
console.log(mallard.display());
console.log(mallard.performFly());
console.log(mallard.performQuack());

mallard.setFlyBehavior(new FlyWithBalloon());
mallard.setQuackBehavior(new MuteQuack());

console.log("\nDespués de cambiar comportamientos:");
console.log(mallard.performFly());
console.log(mallard.performQuack());
