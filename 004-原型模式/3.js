var log = console.log;
// 场景:遇到每次需要独立一份原型对象的，就把原型对象拷贝一份

// 通过属性复制的方式，一个个复制过去
function prototypeExtend() {
    var F = function () {};

    for (var i = 0; i < arguments.length; i++) {
        var curArg = arguments[i];
        for (var j in curArg) {
            // 相当于把每个参数里的对象里的属性全部一个个复制到这个缓存函数F的原型上了
            F.prototype[j] = curArg[j]; 
        }
    }
    return new F();
}

var penguin = prototypeExtend({
    speed: 20,
    swim: function () {
        log('游泳');
    }
}, {
    run: function (speed) {
        log('奔跑速度' + speed);
    }
}, {
    jump: function () {
        log('跳跃');
    }
});
penguin.swim();
penguin.run(10);
penguin.jump();

