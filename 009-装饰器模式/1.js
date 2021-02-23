const log = console.log;

class Shape { 
    draw(fileName) {
        log('画画的baby:'+fileName)
    }
}
class DecoratorShape { 
    constructor(oldShape) { 
        this.decoratorNewShape = oldShape;
    }
    draw(...args) {
        this.setColor();
        this.decoratorNewShape.draw(args);
    }
    setColor() { 
        log('装饰器模式带来的新的方法 设置颜色的方法 还可以干点别的')
    }
} 
const noCoLorShape = new Shape();
const hasColorShape = new DecoratorShape(noCoLorShape);

noCoLorShape.draw('没有装饰过的类');
hasColorShape.draw('装饰过了');
