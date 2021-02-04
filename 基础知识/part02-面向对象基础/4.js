var log = console.log;
var Book = function (id, name, price) { 
    this.id = id;
    this.name = name;
    this.price = price;
}
Book('23213', 'book', '$10'); // 没有使用new导致this -> window

log('id', window.id);
log('name', window.name);
log('price', window.price);

var Book2 = function (id, name, price) { 
    if (this instanceof Book2) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    else { 
        return new Book2(id, name, price);
    }
}
Book2('23213', 'book2', '$10');
log('id', window.id);
log('name', window.name);
log('price', window.price);