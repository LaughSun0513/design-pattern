// 2. 阻止并提示信息 比如私有变量和公有变量 
// 2.1 拦截in操作 
// 2.2 不让delete删除某属性

const log = console.log;
const dir = console.dir;

const obj = {
    _private: '私有属性',
    public: '公共属性',
    cannotDelete: '不让删除'
};
const proxyObj = new Proxy(obj, {
    get: (target, key, receiver) => {
        if (key.startsWith('_')) { 
            log('私有属性 不让你取 起开');
            return false;
        }
        return Reflect.get(target, key, receiver);
    },
    set: (target, key, value, receiver) => {
        if (key.startsWith('_')) { 
            log('私有属性 不让你设置新的值 起开');
            return false;
        }
        return Reflect.set(target, key, value, receiver);
    },
    has: (target, key) => { 
        return key.startsWith('_') ? false : (key in target);
    },
    deleteProperty: (target, key) => {
        if (['cannotDelete'].includes(key)) {
            // throw Error('这个属性这么重要 不让你删除');
            log('这个属性这么重要 不让你删除')
            return false;
        }
        return Reflect.deleteProperty(target, key);
    }
});
// 私有属性的获取和设置
proxyObj._private;
proxyObj._private = '私有属性能不能改呢?';

// 公共属性的获取和设置
log(proxyObj.public);
proxyObj.public = '公共属性可以改';
log(proxyObj.public);

// 捕获in操作
log('public属性在不在obj对象上', 'public' in obj);
log('_private属性在不在obj对象上', '_private' in obj);
// 新写法 Reflect.has
log('Reflect public属性在不在obj对象上', Reflect.has(obj, 'public'));
log('Reflect _private属性在不在obj对象上', Reflect.has(obj,'_private'));

log('public属性在不在proxyObj对象上', '_private' in proxyObj); // false 其实是在的 只是不让你获取
log('_private属性在不在proxyObj对象上', '_private' in proxyObj);
// 新写法 Reflect.has
log('Reflect public属性在不在proxyObj对象上', Reflect.has(proxyObj, 'public'));
log('Reflect _private属性在不在proxyObj对象上', Reflect.has(proxyObj,'_private'));


// 阻止delete操作
// delete obj.cannotDelete; // 对原对象操作还是会删除 ？？
delete proxyObj.cannotDelete;
log('删除操作被阻止',proxyObj);

// 新写法 Reflect.deleteProperty
Reflect.deleteProperty(proxyObj, 'cannotDelete');
log('删除操作被阻止 新写法',proxyObj);


