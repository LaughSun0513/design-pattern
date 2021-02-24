var log = console.log;

function objectCreate(obj) { 
    var F = function () { }; // 缓存函数
    F.prototype = obj; // 是不是很像 类式继承Son.prototype = new Parent();
    var newObj = new F();
    log('newObj.__proto__ === Parent.prototype', newObj.__proto__ === obj);
    log('newObj.__proto__.constructor === Parent.prototype.constructor', newObj.__proto__.constructor === obj.constructor);
    log('newObj.__proto__.constructor !== F', newObj.__proto__.constructor === F);
    log('newObj.__proto__.constructor !== Parent', newObj.__proto__.constructor === Parent);
    log('newObj.__proto__.constructor === Object', newObj.__proto__.constructor === Object);
    return newObj;
}

function Parent() { }
Parent.prototype = {
    name: 'parent',
    hobby: ['打球', '钓鱼'],
    getName: function () { 
        log(this.name);
    }
}

var son3 = objectCreate(Parent.prototype);
var son4 = Object.create(Parent.prototype);

log(son3 instanceof Parent); // true
log(son4 instanceof Parent); // true
log(son3.__proto__.constructor === son4.__proto__.constructor); // 看到没有 是true 说明啥？？ objectCreate函数的做法和Object.create一毛一样