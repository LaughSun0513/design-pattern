const log = console.log;

class RedCircle { 
    draw(x,y,z) { 
        log('画个红色的圆 以后逻辑还会变', x, y, z);
    }
}
class GreenCircle { 
    draw(x,y,z) { 
        log('画个绿色的圆 以后逻辑还会变', x, y, z);
    }
}

// 抽象层
class Shape { 
    constructor(drawAPI) {
        if (new.target == Shape) { 
            throw new Error('这个类必须继承其他情况用不了 因为是抽象类 abstract懂么?')
        }
        this.drawAPI = drawAPI;
    }
    draw() { }
}
// 实现层
class Circle extends Shape { 
    constructor(x, y, z, drawAPI) {
        super(drawAPI);
        this.x = x;
        this.y = y;
        this.z = z;
    }
    draw() {
        // 无论RedCircle和GreenCircle如何变化 对外都是使用draw来调用，统一了调用接口
        this.drawAPI.draw(this.x, this.y, this.z);
    }
}

const redCircle = new Circle(100, 200, 300, new RedCircle());
const greenCircle = new Circle(100, 200, 300, new GreenCircle());
redCircle.draw();
greenCircle.draw();