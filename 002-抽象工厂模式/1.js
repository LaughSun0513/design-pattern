const log = console.log;

// --------形状的简单工厂模式----------------
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
// -----------颜色的简单工厂模式----------------
class Red { 
    fill() {
        log('red')
    }
}
class Green { 
    fill() {
        log('green')
    }
}
class Yellow { 
    fill() {
        log('yellow')
    }
}
class ColorFactory {
    getColor(color) { 
        switch (color) { 
            case 'red':
                return new Red();
            case 'green':
                return new Green();
            case 'yellow':
                return new Yellow();
            default:
                return null;
        }
    }
}
//---------如果工厂一多就没法管理了-------------
//---------抽象工厂: 就是创建工厂的简单工厂模式--
//---------优点:给工厂做了一个统一的出入口，也方便了日后对这个工厂的修改--------------------------------
class CreateFactory { 
    static getFactory(factory) { // 这里利用static
        switch (factory) { 
            case 'shape':
                return new ShapeFactory();
            case 'color':
                return new ColorFactory();
            default:
                return null;
        }
    }
}

const shapeFactory = CreateFactory.getFactory('shape'); // 这里本来应该用 new CreateFactory().getFactory('xxx') 因为有了static静态属性
const shape1 = shapeFactory.getShape('circle');
shape1.draw(); // 圆形


const colorFactory = CreateFactory.getFactory('color');
const color1 = colorFactory.getColor('red');
color1.fill(); // red

