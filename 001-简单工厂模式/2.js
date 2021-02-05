const data = [
    { type: 'Js', content: 'js哪家强' },
    { type: 'Java', content: 'java哪家强' },
    { type: 'Php', content: 'php哪家强' },
    { type: 'Python', content: 'python哪家强' },
]
//  简单工厂模式: 安全类写法 防止别人忘记写 new
const Factory = function (type,content) { 
    if (this instanceof Factory) {
        // 精华: 就是根据传进来的type new不同的类
        const className = this[type](content);
        return new className;
    }
    else { 
        return new Factory(type, content);
    }
}
Factory.prototype = {
    Js: function (content) { 
        this.content = content;
        (function (content) {
            var oDiv = document.createElement('div');
            oDiv.innnerHTML = content;
            oDiv.style.color = 'pink';
            document.getElementById('container').appendChild(oDiv);
        })(content);
    },
    Java: function (content) { 
        this.content = content;
        (function (content) {
            var oDiv = document.createElement('div');
            oDiv.innnerHTML = content;
            oDiv.style.color = 'pink';
            document.getElementById('container').appendChild(oDiv);
        })(content);
    },
    Php: function (content) { 
        this.content = content;
        (function (content) {
            var oDiv = document.createElement('div');
            oDiv.innnerHTML = content;
            oDiv.style.color = 'pink';
            document.getElementById('container').appendChild(oDiv);
        })(content);
    },
    Python: function (content) { 
        this.content = content;
        (function (content) {
            var oDiv = document.createElement('div');
            oDiv.innnerHTML = content;
            oDiv.style.color = 'pink';
            document.getElementById('container').appendChild(oDiv);
        })(content);
    }
}
data.map(i => {
    Factory(i.type,i.content);
});

