// 深入理解-简单工厂模式
const log = console.log;

class Circle { 
    draw() {
        log('圆形')
    }
}
class Rectangle { 
    draw() {
        log('长方形')
    }
}
class Square { 
    draw() {
        log('正方形')
    }
}
// 形状工厂
class ShapeFactory {
    getShape(shapeType) { 
        switch (shapeType) { 
            case 'circle':
                return new Circle();
            case 'rect':
                return new Rectangle();
            case 'square':
                return new Square();
            default:
                return null;
        }
    }
}
// 使用的时候 搞一个工厂
const createFactory = new ShapeFactory();

// 直接就可以使用了
const shape1 = createFactory.getShape('circle');
shape1.draw();

const shape2 = createFactory.getShape('rect');
shape2.draw();

const shape3 = createFactory.getShape('square');
shape3.draw();