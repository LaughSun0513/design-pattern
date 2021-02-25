var log = console.log;

var Observer = (function () {
    var _message = {};
    return {
        regist: function (type, fn) {
            if (typeof _message[type] === 'undefined') {
                _message[type] = [fn];
            }
            else {
                _message[type].push(fn);
            }
        },
        fire: function (type, args) {
            // 找到对应的数组 就返回
            var array = _message[type];
            if (!array) {
                return;
            }
            var events = {
                type: type,
                args: args || {}
            }
            for (var i = 0; i < array.length; i++) {
                array[i].call(this, events);
            }
        },
        remove: function (type, fn) {
            var array = _message[type];
            if (array instanceof Array) {
                for (var i = array.length - 1; i >= 0; i--) {
                    // 如果存在订阅者,就倒着找到并删掉
                    array[i] === fn && array.splice(i, 1);
                }
            }
        }
    }
})();
Observer.regist('test', function (e) {
    console.log('测试订阅功能', e.type, e.args.msg);
});
Observer.fire('test', {
    msg: '传递参数111'
});
