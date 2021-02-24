var log = console.log;
//-----------原型式继承：搞一个缓存函数 然后缓存函数的prototype指向该对象形成继承--------------------
// 为什么要出现这种继承呢 我理解后面的Object.create的实现就是基于这个思想
function objectCreate(obj) { 
    var F = function () { }; // 缓存函数
    F.prototype = obj; // 是不是很像 类式继承Son.prototype = new Parent();
    return new F();
}

var parent = {
    name: 'parent',
    hobby: ['打球', '钓鱼'],
    getName: function () { 
        log(this.name);
    }
}

// 子类son1
var son1 = objectCreate(parent);
son1.name = '儿子1号';
son1.hobby.push('篮球');
log('son1', son1) // { name: '儿子1号' }
son1.getName(); // 儿子1号
log('son1.hobby', son1.hobby) // [ '打球', '钓鱼', '篮球' ] 继承了hobby属性


// 子类son2
var son2 = objectCreate(parent);
son2.name = '儿子2号';
son2.hobby.push('足球');
log('son2', son2); // { name: '儿子2号' }
son2.getName(); // 儿子2号
log('son2.hobby', son2.hobby) // [ '打球', '钓鱼', '篮球', '足球' ]

log('parent的hobby竟然也被改了 尴尬', parent)
/*
{
    name: 'parent',
    hobby: [ '打球', '钓鱼', '篮球', '足球' ],
    getName: [Function: getName]
}
*/

// 缺点: 和类式继承的缺点一样 引用类型的问题
log('parent.hobby', parent.hobby) // [ '打球', '钓鱼', '篮球', '足球' ]
log('son1.hobby', son1.hobby) // [ '打球', '钓鱼', '篮球', '足球' ]
log('son2.hobby', son2.hobby) // [ '打球', '钓鱼', '篮球', '足球' ]

