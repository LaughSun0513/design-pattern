// 类的调用方式
Function.prototype.addMethod = function (name,fn) { 
    this.prototype[name] = fn; // 在prototype上加，这样就可以使用类的方式创建对象
    return this;
}
const Methods = function () { };
Methods
    .addMethod('checkName', function () {
        console.log('checkName');
        return this;
    })
    .addMethod('checkEmail', function () {
        console.log('checkEmail');
        return this;
    })
    .addMethod('checkPasswd', function () {
        console.log('checkPasswd');
        return this;
    });

let a = new Methods(); // 使用类的方式创建对象
a.checkName().checkEmail().checkPasswd();