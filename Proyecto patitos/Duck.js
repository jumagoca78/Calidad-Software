export class Duck {
  constructor(flyBehavior, quackBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  performFly() {
    return this.flyBehavior.fly();
  }

  performQuack() {
    return this.quackBehavior.quack();
  }

  setFlyBehavior(fb) {
    this.flyBehavior = fb;
  }

  setQuackBehavior(qb) {
    this.quackBehavior = qb;
  }

  swim() {
    return "Todos los patos flotan, incluso los de juguete.";
  }

  display() {
    return "Soy un pato genérico.";
  }
}
