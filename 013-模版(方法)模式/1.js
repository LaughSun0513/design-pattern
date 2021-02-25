const log = console.log;

class Game {
    constructor() { 
        if (this.play != Game.prototype.play) { 
            throw new Error('play方法不允许子类修改')
        }
    }
    start() { }
    playing() { }
    end() { }
    play() { 
        this.start();
        this.playing();
        this.end();
    }
}
// 子类实现基类流程中的方法
class Game1 extends Game { 
    start() { 
        log('game1 开始游戏');
    }
    playing() { 
        log('正在玩game1');
    }
    end() {
        log('game1 结束游戏');
    }
}
class Game2 extends Game { 
    start() { 
        log('game2 开始游戏');
    }
    playing() { 
        log('正在玩game2');
    }
    end() {
        log('game2 结束游戏');
    }
}
const game1 = new Game1();
game1.play();

const game2 = new Game2();
game2.play();