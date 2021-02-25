class HowToSayLove { 
    constructor() { 
        this.observers = []
    }
    add(observer) { 
        this.observers.push(observer);
    }
    notifyAllObservers() {
        for (const observer of this.observers){
            observer.update();
        }
    }
    setState(state) { 
        this.state = state;
        this.notifyAllObservers();
    }
    getState() { 
        return this.state;
    }
}
class EngLishLove {
    constructor(observer) { 
        this.observer = observer;
        this.observer.add(this);
    }
    update() { 
        console.log('英语说我爱你',this.observer.getState())
    }
}
class KoreaLove {
    constructor(observer) { 
        this.observer = observer;
        this.observer.add(this);
    }
    update() { 
        console.log('韩语说我爱你',this.observer.getState())
    }
}
const observer = new HowToSayLove();
new EngLishLove(observer);
new KoreaLove(observer);

observer.setState('I Love U');
observer.setState('查啦嘿');

/*
英语说我爱你 I Love U
韩语说我爱你 I Love U
英语说我爱你 查啦嘿
韩语说我爱你 查啦嘿
*/