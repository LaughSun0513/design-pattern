const log = console.log;
const Book = function (id, name) { 
    let private = 'private';
    this.id = id;
    this.setName = function (name) { 
        log(name, private);
    };
    this.setName(name); // 可以通过内部方法获取到private
}
Book.isStatic = true;
Book.isStaticFunc = function () { 
    log('isStaticFunc')
}
Book.prototype = {
    isCommon: false,
    isCommonFunc: function () { }
}
let obj = new Book(11, '测试类的属性和方法');

log('obj.private', obj.private); // undefined 获取不到
log('obj.id', obj.id); // 11
log('obj.setName', obj.setName); // [Function (anonymous)]
log('obj.isCommon', obj.isCommon); // false
log('obj.isCommonFunc', obj.isCommonFunc); // [Function: isCommonFunc]

log('obj.isStatic', obj.isStatic); // undefined
log('obj.isStaticFunc', obj.isStaticFunc); // undefined

log('Book.private', Book.private); // undefined 获取不到
log('Book.isCommon', Book.isCommon); // undefined
log('Book.isCommonFunc', Book.isCommonFunc); // undefined

log('Book.isStatic', Book.isStatic); // true 静态属性只有类才能获取到
log('Book.isStaticFunc', Book.isStaticFunc);// [Function (anonymous)] 静态方法只有类才能获取到