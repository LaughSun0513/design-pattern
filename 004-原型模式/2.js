// --------------原型模式: 原型实例指向创建对象的类----------
// 图片轮播类
var LoopImages = function (imgsArr, container) { 
    this.imgsArr = imgsArr;
    this.container = container;
    // this.createImage = function () { }; 重复在构造函数里创建，造成内存浪费
    // this.changeImage = function () { };
}
LoopImages.prototype = {
    createImage: function () { },
    changeImage: function () { },
}

// 1
var SlideLoopImg = function (imgsArr,container) { 
    LoopImages.call(this, imgsArr, container); // 通过call复制属性
}
SlideLoopImg.prototype = new LoopImages(); // 通过new复制方法 原型模式

// 2
var FadeInLoopImg = function (imgsArr,container,arrow) { 
    LoopImages.call(this, imgsArr, container); // 通过call复制属性
    // 差异化属性
    this.arrow = arrow; 
}
FadeInLoopImg.prototype = new LoopImages(); // 通过new复制方法
// 差异化方法
FadeInLoopImg.prototype.changeImage = function () {
    log('FadeInLoopImg 重写changeImage方法')
}