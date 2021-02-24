//-----------类式继承：子类prototype = new 父类--------------------
const log = console.log;
function Parent() { 
    this.superValue = true;
    this.changeArr = ['1','2'];
}
Parent.prototype = {
    getSuperValue: function () {
        return this.superValue;
    }
}

function Son() { 
    this.sonValue = false;
}
Son.prototype = new Parent(); // 通过原型直接指向new完的父亲类(父类实例对象)
Son.prototype.getSonValue = function () {
    return this.sonValue;
}

const son = new Son();

log(son.sonValue);
log(son.getSonValue());
// 继承过来的父类属性和方法
log(son.superValue);
log(son.getSuperValue());
/** 
    false
    false
    true
    true
*/


// instanceof是根据prototype来确定对象和类的关系
log('子类实例对象属于Son类',son instanceof Son);
log('子类实例对象属于Parent类', son instanceof Parent);
log('Object 是所有对象的祖先 son instanceof Object', son instanceof Object);
log('子类构造函数的原型对象 继承了 父类 ',Son.prototype instanceof Parent);

// !!缺点也很明显!!
// 如果父类上有一个引用类型，一个实例对象改变了里面的值，其他实例对象都会改变，导致问题，因为引用类型存的是一个地址
// 导致的问题 无法向父类 传递参数 也就是new的时候没法直接传一些参数进去 因为会有引用类型的顾虑
const son1 = new Son();
const son2 = new Son();
son1.changeArr.push('往里面加了一个，son2也有了 信不信');

log('son1.changeArr', son1.changeArr);
log('son2.changeArr', son2.changeArr);
/*
son1.changeArr [ '1', '2', '往里面加了一个，son2也有了 信不信' ]
son2.changeArr [ '1', '2', '往里面加了一个，son2也有了 信不信' ]
*/