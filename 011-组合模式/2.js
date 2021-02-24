var objectCreate = function (o) { 
    var F = function () { }
    F.prototype = o;
    return new F();
}
var inheritPrototype = function (parent,son) { 
    var p = objectCreate(parent.prototype);
    p.constructor = son;
    son.prototype = p;
}
var News = function () { 
    this.children = [];
    this.element = null;
}
News.prototype = {
    init: function () { },
    add: function () { },
    getElement: function () { }
}

var Container = function (id, parent) {
    News.call(this);
    this.id = id;
    this.parent = parent;
    this.init();
}
inheritPrototype(Container, News);
Container.prototype.init = function () { 
    
}