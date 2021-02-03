// 1
function checkName() {}
function checkEmail() {}
function checkPassWd() {}

// 2
const checkName = function () { }
const checkEmail = function () { }
const checkPassWd = function () { }

// 3 用对象收编函数变量
const CheckObject = {
    checkName: function () {
        console.log('111')
        return this;
    },
    checkEmail: function () {
        console.log('222')
        return this;
    },
    checkPassWd: function () {
        console.log('333')
        return this;
    }
}
CheckObject.checkName().checkEmail().checkPassWd(); // 通过return this 链式调用

// 4 没法复制
const CheckObject = function () {}
CheckObject.checkName = function () {}
CheckObject.checkEmail = function () {}
CheckObject.checkPassWd = function () {}

// 5 函数返回对象
const CheckObject = function () { 
    return {
        checkName: function () {},
        checkEmail: function () {},
        checkPassWd: function () {}
    }
}
let a = CheckObject();
a.checkPassWd();

let b = CheckObject();
b.checkEmail();

// 6 类
const CheckObject = function () { 
    this.checkName = function () {};
    this.checkEmail = function () {};
    this.checkPassWd = function () {};
}
let c = new CheckObject();
c.checkEmail();

// 7
const CheckObject = function () { };
CheckObject.prototype.checkName = function () { };
CheckObject.prototype.checkEmail = function () { };
CheckObject.prototype.checkPassWd = function () { };

// 8
const CheckObject = function () { };
CheckObject.prototype = {
    checkName: function () {
        console.log('111')
        return this;
    },
    checkEmail: function () {
        console.log('222')
        return this;
    },
    checkPassWd: function () {
        console.log('333')
        return this;
    }
}
let d = new CheckObject();
d.checkName().checkEmail().checkPassWd();