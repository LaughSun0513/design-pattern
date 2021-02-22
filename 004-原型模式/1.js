var log = console.log;

// 图片轮播类
var LoopImages = function (imgsArr, container) { 
    this.imgsArr = imgsArr;
    this.container = container;
    this.createImage = function () { }; // 缺点: 每次这俩方法都要创建 但是下面又没用到 需要覆盖重写 造成浪费
    this.changeImage = function () { };
}
// 上下切换类
var SlideLoopImg = function (imgsArr,container) { 
    LoopImages.call(this, imgsArr, container); // 通过call复制属性
    this.changeImage = function () {
        log('SlideLoopImg 重写changeImage方法')
    };
}
// 渐隐切换类
var FadeInLoopImg = function (imgsArr,container, arrow) { 
    LoopImages.call(this, imgsArr, container); // 通过call复制属性
    this.arrow = arrow; // 差异化属性
    this.changeImage = function () {
        log('FadeInLoopImg 重写changeImage方法')
    };
}

// 使用
var fadeImg = new FadeInLoopImg(['01.png', '02.png', '03.png'], 'slide', ['left.png', 'right.png']);
fadeImg.changeImage(); // FadeInLoopImg 重写changeImage方法