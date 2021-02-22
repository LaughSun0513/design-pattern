var log = console.log;
//-----------这么写 万一别人写了一个on 就覆盖了 引出单例模式-----------------------
function g(id) {
    return document.getElementById(id);
}

function css(id, key, value) {
    g(id).style[key] = value;
}

function attr(id, key, value) {
    g(id)[key] = value;
}

function html(id, value) {
    g(id).innerHTML = value;
}
function on(id,type,fn) { 
    g(id)['on' + type] = fn;
}

//--------------命名空间方式实现单例模式---------------------
var Ming = {
    g: function (id) { 
        return document.getElementById(id);
    },
    css: function (id, key, value) { 
        this.g(id).style[key] = value;
    }
}
// Ming.css('container', float, 'left');

//--------------无法修改的静态变量 通过闭包模拟class的static静态属性 -----------------------
var Static = (function () {
    // 这个变量只能读，不能改 因为在闭包作用域里面 模拟了只能读不能改
    var staticConf = {
        MAX_NUM: 100,
        COUNT: 200
    }
    // 通过返回的对象来读取
    return {
        get: function (name) {
            return staticConf[name] ? staticConf[name] : null
        }
    }
})();
log('读取静态变量', Static.get('COUNT'));

//--------------惰性单例模式 延迟创建单例对象-------------------
var LazySingle = (function () {
    var lazyInstance = null;
    function Single() {
        return {
            staticMethod: function () { },
            staticVersion: '1.0'
        }
    }
    return function () {
        // 就是利用闭包 通过控制lazyInstance变量,要用的时候调用一下函数Single
        if (!lazyInstance) {
            lazyInstance = Single();
        }
        return lazyInstance;
    }
})();
log('延迟加载单例模式', LazySingle().staticVersion)

