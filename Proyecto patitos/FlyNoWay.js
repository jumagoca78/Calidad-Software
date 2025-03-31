import { FlyBehavior } from './FlyBehavior.js';
export class FlyNoWay extends FlyBehavior {
  fly() {
    return "No puedo volar.";
  }
}
