//-----------构造函数继承：父类在子类里面直接call--------------------
var log = console.log;

function Parent(id) {
    this.id = id;
    this.superValue = true;
    this.changeArr = ['1','2'];
}
Parent.prototype = {
    getSuperValue: function () {
        return this.superValue;
    }
}

function Son(id) {
    Parent.call(this,id); // 构造函数继承精华
    this.sonValue = false;
}
// Son.prototype = new Parent(); // 通过原型直接指向new完的父亲类(父类实例对象)
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
// 缺点：没有把父亲类原型上的方法继承过来
son1.getSuperValue(); // son1.getSuperValue is not a function
son2.getSuperValue(); // son1.getSuperValue is not a function
