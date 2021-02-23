// 1. get/set 获取属性和修改属性都可以被拦截到
const log = console.log;
const dir = console.dir;

const obj = {
    a: 1,
    b: 2
}

const proxyObj = new Proxy(obj, {
    get: (target, key, receiver) => {
        dir({
            type:'get',
            target,
            key,
            receiver
        });
        return Reflect.get(target, key, receiver);
    },
    set: (target, key, value, receiver) => {
        dir({
            type:'set',
            target,
            key,
            value,
            receiver
        });
        return Reflect.set(target, key, value, receiver);
    }
});
log('obj1', obj);
log('proxyObj1', proxyObj);

proxyObj.a = 2;

log('obj2', obj.a);
log('proxyObj2', proxyObj.a);