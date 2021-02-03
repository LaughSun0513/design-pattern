Function.prototype.addMethod = function (name,fn) { 
    this[name] = fn;
    return this; // 这个this 可以让addMethod变成链式
}
const methods = new Function();
methods
    .addMethod('checkName', function () {
        console.log('checkName');
        return this; // 这个this 可以在调用的时候链式
    })
    .addMethod('checkEmail', function () {
        console.log('checkEmail');
        return this;
    })
    .addMethod('checkpasswd', function () {
        console.log('checkpasswd');
        return this;
    });
methods.checkName().checkEmail(); // 函数调用方式

