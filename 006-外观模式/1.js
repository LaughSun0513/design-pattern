var log = console.log;
// 外观模式 说白了就是if-else 兼容各种情况
function addEvent(dom, type, fn) { 
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
    }
    else if (dom.attachEvent) {
        var newType = 'on' + type;
        dom.attachEvent(newType, fn);
    }
    else { 
        var newType = 'on' + type;
        dom[newType] = fn;
    }
}
var myInput = document.getElementById('myInput');

addEvent(myInput, 'click', function () { 
    log('1绑定事件啦,不用管兼容性问题了,真爽');
})
addEvent(myInput, 'click', function () { 
    log('2绑定事件啦,不用管兼容性问题了,真爽');
})
//------------------------------
var getEvent = function (event) {
    return event || window.event
}
var getTarget = function (event) {
    var newEvent = getEvent(event);
    return newEvent.target || newEvent.srcElement;
}
var preventDefault = function (event) { 
    var newEvent = getEvent(event);
    if (newEvent.preventDefault) {
        newEvent.preventDefault();
    }
    else { 
        newEvent.returnValue = false;
    }
}
document.onclick = function (e) {
    preventDefault(e);
    if (getTarget(e) !== document.getElementById('myInput')) { 
        hideInput();
    }
}