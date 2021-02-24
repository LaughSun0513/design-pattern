var log = console.log;

function objectCreate(o) {
    var F = function () { };
    F.prototype = o;
    return new F();
}
function inheritPrototype(parent, son) { 
    var p = objectCreate(parent.prototype);
    p.constructor = son;
    son.prototype = p;
}

function Parent(name) { 
    this.name = name || 'parent';
    this.hobby = ['打球', '钓鱼'];
}
Parent.prototype.getName = function () { 
    log(this.name);
}

function Son(name,time) { 
    Parent.call(this, name);
    this.time = time;
}
inheritPrototype(Parent, Son);
Son.prototype.getTime = function () { 
    log(this.time);
}

var son1 = new Son('son1', 200);
son1.hobby.push('篮球');
son1.getTime();

var son2 = new Son('son2', 300);
son2.hobby.push('足球');
son2.getTime();

var son3 = new Son('', 0);

// 完美 各有各的属性和方法
log(son1); // { name: 'son1', hobby: [ '打球', '钓鱼', '篮球' ], time: 200 }
log(son2); // { name: 'son2', hobby: [ '打球', '钓鱼', '足球' ], time: 300 }
log(son3); // { name: 'parent', hobby: [ '打球', '钓鱼' ], time: 0 }



