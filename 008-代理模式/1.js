//-------------------
const log = console.log;

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
class ProxyReadBook {
	constructor(book) { 
		this.book = book;
	}
	// 代理的精髓: 我希望初始化不载入book，等待我使用read的时候，发现有书就读，没书就找书再读
	read() { 
		if (this.realBook == null) { 
			this.realBook = new ReadBook(this.book);
		}
		this.realBook.read();
	}
}

// 在使用的时候就可以不改变原来的类，而实现一些不一样的功能
const user = new ProxyReadBook('你不知道的js');
user.read();