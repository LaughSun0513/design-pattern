var Book = (function () {
    var bookNum = 0;
    function checkBook(name) { };
    // 闭包构造函数
    function _book(newId, newName, newPrice) {
        var name, id;
        function checkId(id) { };
        this.setName = function () { };
        this.id = id;
        bookNum++;
        if (bookNum > 1000) {
            throw new Error('我们仅出版100本书');
        }
        this.setName(name)
    }
    // 将构建原型放在闭包里面
    _book.prototype = {
        isJSBook: false,
        display: function () { }
    }
    // 返回类
    return _book;
})();
