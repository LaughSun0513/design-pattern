var log = console.log;

var Circle = function () { };
Circle.prototype = {
    draw: function () { 
        log('圆形')
    }
}

var Rectangle = function () { };
Rectangle.prototype = {
    draw: function () { 
        log('长方形')
    }
}

var Square = function () { };
Square.prototype = {
    draw: function () { 
        log('正方形')
    }
}

var ShapeFactory = function () { };
ShapeFactory.prototype = {
    getShape:function(shapeType) { 
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



var Red = function () { };
Red.prototype = {
    fill: function () { 
        log('red')
    }
}

var Green = function () { };
Green.prototype = {
    fill: function () { 
        log('green')
    }
}

var Yellow = function () { };
Yellow.prototype = {
    fill: function () { 
        log('yellow')
    }
}
var ColorFactory = function () { };
ColorFactory.prototype = {
    getColor: function(color) { 
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

var CreateFactory = function () { };
CreateFactory.getFactory = function (factory) { 
    switch (factory) { 
        case 'shape':
            return new ShapeFactory();
        case 'color':
            return new ColorFactory();
        default:
            return null;
    }
}

const shapeFactory = CreateFactory.getFactory('shape'); // 这里本来应该用 new CreateFactory().getFactory('xxx') 因为有了static静态属性
const shape1 = shapeFactory.getShape('circle');
shape1.draw(); // 圆形

const colorFactory = CreateFactory.getFactory('color');
const color1 = colorFactory.getColor('red');
color1.fill(); // red