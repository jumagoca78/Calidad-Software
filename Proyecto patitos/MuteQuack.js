import { QuackBehavior } from './QuackBehavior.js';
export class MuteQuack extends QuackBehavior {
  quack() {
    return "... (silencio)";
  }
}
