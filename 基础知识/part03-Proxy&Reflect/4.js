// 实战2 --- 深层取值判断
const log = console.log;

const country = {
    name: 'China',
    city: {
        name: 'BeiJing',
        area: {
            name: 'HaiDian'
        }
    }
}
// 传统做法
const areaName = country.city && country.city.area && country.city.area.name;
//const areaId = country.provice.city.area.name; //TypeError: Cannot read property 'city' of undefined

// 利用proxy
// 预期 
// country.xx country.xx.xx为undefined的时候没关系就是undefined 
// 但 country.xx() country.xx.xx() 这么来获取值
// 那就是说country.xx要么是undefined  要么是一个函数 然后返回对应的值
let isFirst = true;
function noop() { }
let proxyVoid = getData(undefined);
function getData(obj) {
    if (obj === undefined && !isFirst) {
        // 让 get 方法第一次接收代理 undefined 的时候不会死循环
        return proxyVoid;
    }
    if (obj === undefined && isFirst) {
        isFirst = false;
    }
    let proxyObj = new Proxy(noop, {
        apply: (target, context, [arg]) => {
            return obj === undefined ? arg : obj;
        },
        get: (target, key) => { 
            if (obj !== undefined
                && obj !== null
                && obj.hasOwnProperty(key)) {
                return getData(obj[key]);
            }
            return proxyVoid;
        }
    });
    return proxyObj;
}
let res1 = getData(country)() === country;
log(res1);

let res2 = getData(country).city.name(); // BeiJing
log(res2);

let res3 = getData(country).city.name.xxx.yyy.zzz(); // undefined
log(res3);