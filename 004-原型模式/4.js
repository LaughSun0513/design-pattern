const log = console.log;

class Shape {
    constructor() { 
        this.id = null;
        this.type = null;
    }
    getId() { 
        return this.id;
    }
    getType() { 
        return this.type;
    }
    setId(id) { 
        this.id = id;
    }
    clone() { 
        let clone = {};
        // 如果此类被继承，this会变成子类的方法
        log('this', this.__proto__);
        clone.__proto__ = this.__proto__;
        this.__proto__.constructor.call(clone);
        return clone;
    }
}
//---------------
// 1
function Shape1() { 
    this.type = 'Shape1';
};
Shape1.prototype.draw = function () { 
    log('Shape1')
}
Shape1.prototype.__proto__ = new Shape();

// 2
function Shape2() { 
    this.type = 'Shape2';
};
Shape2.prototype.draw = function () { 
    log('Shape2')
}
Shape2.prototype.__proto__ = new Shape();

// 3
function Shape3() { 
    this.type = 'Shape3';
};
Shape3.prototype.draw = function () { 
    log('Shape3')
}
Shape3.prototype.__proto__ = new Shape();

//---------------
class ShapeCache { 
    static loadCache() { 
        const shape1 = new Shape1();
        shape1.setId('1');
        ShapeCache.shapeMap.set(shape1.getId(), shape1);
        log(ShapeCache.shapeMap)

        const shape2 = new Shape2();
        shape2.setId('2');
        ShapeCache.shapeMap.set(shape2.getId(), shape2);
        log(ShapeCache.shapeMap)

        const shape3 = new Shape3();
        shape3.setId('3');
        ShapeCache.shapeMap.set(shape3.getId(), shape3);
        log(ShapeCache.shapeMap)
    }
    static getShape(shapeId) { 
        const cachedShape = ShapeCache.shapeMap.get(shapeId);
        return cachedShape;
    }
}
ShapeCache.shapeMap = new Map();
ShapeCache.loadCache();

const clonedShape = ShapeCache.getShape("1");
log("Shape : " + clonedShape.getType());          

const clonedShape2 = ShapeCache.getShape("2");
log("Shape : " + clonedShape2.getType());         

const clonedShape3 = ShapeCache.getShape("3");
log("Shape : " + clonedShape3.getType());

/** 
Map { '1' => Shape1 { type: 'Shape1', id: '1' } }
Map {
    '1' => Shape1 { type: 'Shape1', id: '1' },
    '2' => Shape2 { type: 'Shape2', id: '2' } 
}
Map {
    '1' => Shape1 { type: 'Shape1', id: '1' },
    '2' => Shape2 { type: 'Shape2', id: '2' },
    '3' => Shape3 { type: 'Shape3', id: '3' } 
}
Shape : Shape1
Shape : Shape2
Shape : Shape3
*/