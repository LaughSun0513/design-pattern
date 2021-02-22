const log = console.log;

class Shape1 {
    draw() { 
        log('Shape1 很复杂很复杂的逻辑')
    }
}
class Shape2 {
    draw() { 
        log('Shape2 很复杂很复杂的逻辑')
    }
}
class Shape3 {
    draw() { 
        log('Shape3 很复杂很复杂的逻辑')
    }
}

// 你实在不想看上面的逻辑 只想知道怎么调用就好了
// 隐藏内部的复杂性，这样能减少一些对内部修改的可能，同时对外暴露单一功能接口，也有利于降低复杂性。
class ShapeMaker { 
    constructor() {
        this.shape1 = new Shape1();
        this.shape2 = new Shape2();
        this.shape3 = new Shape3();
    }
    drawShape1() { 
        this.shape1.draw();
    }
    drawShape2() { 
        this.shape2.draw();
    }
    drawShape3() { 
        this.shape3.draw();
    }
}

const user = new ShapeMaker();
user.drawShape1();
user.drawShape2();
user.drawShape3();