// 实战1--可以用来做校验
const log = console.log;
const dir = console.dir;

const validatorUtils = {
    phone: (value) => { 
        let reg = /^1[0-9]{10}$/;
        if (!reg.test(value)) { 
            log('电话号码需要 10位数字 你这填的不对');
            return false;
        }
        return true;
    }
}
let proxyValidator = new Proxy(validatorUtils, {
    set: (target, key, value) => {
        dir({target, key, value})
        let validatorResult = validatorUtils[key](value)
        if (!validatorResult) {
            log('校验不通过');
        } else { 
            log('校验通过');
        }
        return Reflect.set(target, key, value);
    }
});
// proxyValidator.phone = '1861122334';
// log('不对的号码',proxyValidator.phone)

proxyValidator.phone = '18611223342';
log('对的号码', proxyValidator.phone)
