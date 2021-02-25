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

// 容器类
var Container = function (id, parent) {
    News.call(this);
    this.id = id;
    this.parent = parent;
    this.init();
}
inheritPrototype(Container, News);
Container.prototype.init = function () { 
    this.element = document.createElement('ul');
    this.element.id = this.id;
    this.element.className = 'new-container';
}
Container.prototype.add = function (child) { 
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
Container.prototype.getElement = function () { 
    return this.element;
}
Container.prototype.show = function () { 
    this.parent.appendChild(this.element);
}

var Item = function (classname) { 
    News.call(this);
    this.classname = classname || '';
    this.init();
}
inheritPrototype(Item, News);
Item.prototype.init = function () { 
    this.element = document.createElement('li');
    this.element.className = this.classname;
}
Item.prototype.add = function (child) { 
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
Item.prototype.getElement = function () { 
    return this.element;
}

var NewsGroup = function (classname) { 
    News.call(this);
    this.classname = classname || '';
    this.init();
}
inheritPrototype(NewsGroup, News);
NewsGroup.prototype.init = function () { 
    this.element = document.createElement('li');
    this.element.className = this.classname;
}
NewsGroup.prototype.add = function (child) { 
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
NewsGroup.prototype.getElement = function () { 
    return this.element;
}

// 新闻类
var ImageNews = function (url,href,classname) { 
    News.call(this);
    this.url = url;
    this.href = href;
    this.classname = classname || '';
    this.init();
}
inheritPrototype(ImageNews, News);
ImageNews.prototype.init = function () { 
    this.element = document.createElement('a');
    var img = new Image();
    img.src = this.url;
    this.element.appendChild(img);
    this.element.className = 'image-news' + this.classname;
    this.element.href = this.href;
}
ImageNews.prototype.add = function () { }
ImageNews.prototype.getElement = function () { 
    return this.element;
}

var IconNews = function (text,href,type) { 
    News.call(this);
    this.text = text;
    this.href = href;
    this.type = type || 'video';
    this.init();
}
inheritPrototype(IconNews, News);
IconNews.prototype.init = function () { 
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'icon' + this.type;
}
IconNews.prototype.add = function () { }
IconNews.prototype.getElement = function () { 
    return this.element;
}

var EasyNews = function (text,href) { 
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.init();
}
inheritPrototype(EasyNews, News);
EasyNews.prototype.init = function () { 
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'text';
}
EasyNews.prototype.add = function () { }
EasyNews.prototype.getElement = function () { 
    return this.element;
}

var TypeNews = function (text,href,type,pos) { 
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || '';
    this.pos = pos || 'left';
    this.init();
}
inheritPrototype(TypeNews, News);
TypeNews.prototype.init = function () { 
    this.element = document.createElement('a');
    if (this.pos === 'left') {
        this.element.innerHTML = `【${this.type}】${this.text}`;
    }
    else { 
        this.element.innerHTML = `【${this.text}】${this.type}`;
    }
    this.element.href = this.href;
    this.element.className = 'text';
}
TypeNews.prototype.add = function () { }
TypeNews.prototype.getElement = function () { 
    return this.element;
}





var news1 = new Container('news', document.body);
// 套娃 适合层级结构
news1.add(
    new Item('item1').add(
        new IconNews('iconNews1', '#', 'video')
    )
).add(
    new Item('item1').add(
        new IconNews('iconNews2', '#', 'live')
    )
).add(
    new Item('item1').add(
        new NewsGroup('has-img').add(
            new ImageNews('https://www.baidu.com/img/dong_8f1d47bcb77d74a1e029d8cbb3b33854.gif', '#', 'small')
        ).add(
            new EasyNews('EasyNews1-----', '#')
        ).add(
            new EasyNews('EasyNews2-----', '#')
        )
    )
).add(
    new Item('item1').add(
        new TypeNews('TypeNews', '#', 'NBA', 'left')
    )
).add(
    new Item('item1').add(
        new TypeNews('TypeNews2', '#', 'CBA', 'right')
    )
).show();

// var news1 = new Container('news', document.body);
// var item1 = new Item('item1');
// var iconNews1 = new IconNews('iconNews1', '#', 'video');
// var iconNews2 = new IconNews('iconNews2', '#', 'video');


// item1.add(iconNews1);
// item1.add(iconNews2);
// news1.add(item1);