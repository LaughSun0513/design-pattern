//-----------------寄生式继承：对原型继承的二次封装----------------------------
var log = console.log;

// 对原型继承的扩展
function objectCreate(o) {
    var F = function () { };
    F.prototype = o;
    return new F();
}
var parent = {
    name: 'parent',
    hobby: ['打球','钓鱼']
}
function createSon(obj) { 
    var son = new objectCreate(obj);
    // 只是通过函数的方式在原来的基础上可以新增方法了
    son.getName = function () {
        log('儿子继承过来的name', son.name);
    }
    son.getHobby = function () { 
        log('儿子继承过来的爱好', son.hobby);
    }
    return son;
}

var son = createSon(parent);
son.getName();
son.getHobby();
son.hobby.push('英雄联盟');
log(son.hobby); // [ '打球', '钓鱼', '英雄联盟' ]

var son2 = createSon(parent);
son2.getHobby();
// 缺点: 并没有解决引用问题
log(son2.hobby); // [ '打球', '钓鱼', '英雄联盟' ]


