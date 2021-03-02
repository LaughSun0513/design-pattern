const log = console.log;

class Stragtegy1 {
    run(num1, num2) {
        log(num1 + num2);
    }
}
class Stragtegy2 {
    run(num1, num2) {
      log(num1 - num2);
    }
}
class Stragtegy3 {
    run(num1, num2) {
      log(num1 * num2);
    }
}
class Context {
    constructor(stragtegy) {
        this.stragtegy = stragtegy;
    }
    findStragtegyToRun(num1, num2) {
        this.stragtegy.run(num1, num2);
    }
}
const test = new Context(new Stragtegy1());
test.findStragtegyToRun(1, 2);

const test2 = new Context(new Stragtegy2());
test2.findStragtegyToRun(1, 2);

const test3 = new Context(new Stragtegy3());
test3.findStragtegyToRun(1, 2);
