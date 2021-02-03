Function.prototype.addMethod = function (name,fn) { 
    this[name] = fn;
}
const methods = function () { };
methods.addMethod('checkName', function () {
    console.log('checkName')
});
methods.addMethod('checkEmail', function () {
    console.log('checkEmail')
});
methods.addMethod('checkpasswd', function () {
    console.log('checkpasswd')
});
methods.checkName();
methods.checkEmail();


