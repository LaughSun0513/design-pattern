var log = console.log;

function Parent(id) {
    this.id = id;
    this.superValue = true;
    this.changeArr = ['1','2'];
}
Parent.prototype = {
    getSuperValue: function () {
        log(this.superValue);
    }
}

function Son(id) {
    Parent.call(this,id); // 构造函数继承精华
    this.sonValue = false;
}
Son.prototype = new Parent(); // 通过原型直接指向new完的父亲类(父类实例对象)

Son.prototype.getSonValue = function () {
    return this.sonValue;
}

var son1 = new Son(1);
son1.changeArr.push('新的值');

var son2 = new Son(2);

log('son1.changeArr', son1.changeArr);
log('son2.changeArr', son2.changeArr);
/*
son1.changeArr [ '1', '2', '新的值' ]
son2.changeArr [ '1', '2' ]
*/
// 构造函数继承里单纯靠call来继承来属性 通过组合继承 解决了父类方法的继承
son1.getSuperValue(); // true
son2.getSuperValue(); // true