var log = console.log;
var Book = (function () {
    var bookNum = 0;
    function checkBook() { 
        log('checkBook')
    };
    // 闭包
    return function (newId, newName, newPrice) {
        var name, price;
        function checkId(id) { };

        this.id = newId;
        this.setName = function (name) { 
            log('setName', name);
        };
        this.setName(newName)

        bookNum++;
        if (bookNum > 1000) {
            throw new Error('我们仅出版100本书');
        }
    }
})();
// 这个在闭包外 看着不像一个整体
Book.prototype = {
    isJSBook: false,
    display: function () { }
}

let a = new Book();
log(a);