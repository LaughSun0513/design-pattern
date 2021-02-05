// 书里面的思路 反着来 先定义抽象工厂 每次使用的时候 拿这个子类去继承父类
var log = console.log;

// 抽象工厂函数
var CreateFactory = function (subType, superType) { 
    var FactoryName = CreateFactory[superType]; // 看看CreateFactory函数对象上有没有这个工厂函数
    if (typeof FactoryName === 'function') {
        log('有这个工厂函数', superType);
        function F() { }
        F.prototype = new FactoryName(); // 用这个F把ShapeFactory里的东西继承过来
        
        subType.constructor = subType;
        subType.prototype = new F(); // 然后Circle去继承这个F
    }
    else { 
        throw new Error('没找到对应的工厂函数')
    }
}
// ---------形状的工厂函数-----------------
CreateFactory.ShapeFactory = function () { 
    this.type = 'shape';
}
CreateFactory.ShapeFactory.prototype = {
    getType: function () { 
        log(this.type)
        return this.type;
    }
}
// 子类
var Circle = function () { 
    this.draw = function() { 
        log('圆形')
    }
};

CreateFactory(Circle, 'ShapeFactory'); // 传入子类和工厂类

var shape1 = new Circle();
log(shape1.type)
shape1.draw();
shape1.getType()

// ---------颜色的工厂函数-----------------
CreateFactory.ColorFactory = function () { 
    this.type = 'color';
}
CreateFactory.ColorFactory.prototype = {
    getColor: function () { 
        log(this.type);
        return this.type;
    }
}

// 子类
var Red = function () { 
    this.fill = function () { 
        log('red')
    }
};
CreateFactory(Red, 'ColorFactory');// 传入子类和工厂类

var color = new Red();
color.fill();
color.getColor();