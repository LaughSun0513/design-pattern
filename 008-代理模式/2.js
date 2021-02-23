// 使用 new Proxy实现类似功能
const log = console.log;
const dir = console.dir;

class ReadBook {
	constructor(book) {
		this.book = book;
		this.loadBook(book);
	}
	loadBook(book) {
		log('正在找' + book)
	}
	read() {
		log('准备开始读' + this.book);
	}
}
const ProxyReadBook = new Proxy(ReadBook, {
	construct: (target, args) => { 
		dir({ target, args })
		// 准备一个对象 将缓存对象的原型继承目标类的原型对象
		let bookObj = {};
		bookObj.__proto__ = target.prototype;
		// 传进来的参数
		bookObj.book = args[0];

		// 对这个缓存类进行再次代理
		return new Proxy(bookObj, {
			get: (target, key, receiver) => {
				dir({ target, key, receiver });
				if (key === 'read') { 
					return () => {
						if (this.realBook == null) { 
							this.realBook = new ReadBook(target.book);
						}
						this.realBook.read();
					}
				}
				return Reflect.get(target, key, receiver);
			}
		})
	}
});
const ES6Book = new ProxyReadBook('ES6 Book');
ES6Book.read();