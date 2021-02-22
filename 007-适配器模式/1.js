const log = console.log;

class IosPlayer { 
    playIos(fileName) { 
        log('ios播放了---' + fileName);
    }
}
class AndroidPlayer { 
    playAndroid(fileName) { 
        log('android播放了---' + fileName);
    }
}
// 适配器
class MediaAdapter { 
    constructor(playType) {
        switch (playType) {
            case 'ios':
                MediaAdapter.player = new IosPlayer();
                break;
            
            case 'android':
                MediaAdapter.player = new AndroidPlayer();
                break;
        }
    }
    // 不管啥都在这里适配好
    play(playType, fileName) { 
        switch (playType) {
            case 'ios':
                MediaAdapter.player.playIos(fileName);
                break;
            
            case 'android':
                MediaAdapter.player.playAndroid(fileName);
                break;
        }
    }
}
// 接上音乐播放器 不管啥类型的机型 给我放歌就完事了！！
class AudioPlayer { 
    play(playType, fileName) { 
        switch (playType) {
            case 'ios':
            case 'android':
                AudioPlayer.mediaAdapter = new MediaAdapter(playType);
                AudioPlayer.mediaAdapter.play(playType, fileName);
                break;
            default:
                log('不知道其他啥类型')
                break;
        }
    }
}
const userToPlayAudio = new AudioPlayer();

userToPlayAudio.play('ios', '难忘ios今宵');
userToPlayAudio.play('android', '难忘android今宵');