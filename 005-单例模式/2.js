const log = console.log;

class SingleObject { 
    constructor() {
        log('new.target', new.target);
        if (new.target !== undefined) { 
            log('单例模式 不让用new，用getInstance来获取实例')
        }
    }
    static getInstance() { 
        if (SingleObject.instance) { 
            return SingleObject.instance;
        }
        SingleObject.instance = {};
        SingleObject.instance.__proto__ = SingleObject.prototype;
        return SingleObject.instance;
    }
    showMessage() { 
        log('单例模式')
    }
}
const singleObject = SingleObject.getInstance();
singleObject.showMessage();

new SingleObject();