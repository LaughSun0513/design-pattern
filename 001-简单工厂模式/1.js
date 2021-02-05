var Java = function (content) { 
    this.content = content;
    (function (content) {
        var oDiv = document.createElement('div');
        oDiv.innnerHTML = content;
        oDiv.style.color = 'green';
        document.getElementById('container').appendChild(oDiv);
    })(content);
}
var Php = function (content) { 
    this.content = content;
    (function (content) {
        var oDiv = document.createElement('div');
        oDiv.innnerHTML = content;
        oDiv.style.color = 'red';
        document.getElementById('container').appendChild(oDiv);
    })(content);
}
var Js = function (content) { 
    this.content = content;
    (function (content) {
        var oDiv = document.createElement('div');
        oDiv.innnerHTML = content;
        oDiv.style.color = 'pink';
        document.getElementById('container').appendChild(oDiv);
    })(content);
}

function JobFactory(type,content) { 
    switch (type,content) { 
        case 'java':
            return new Java(content);
        case 'php':
            return new Php(content);
        case 'js':
            return new Js(content);
    }
}

JobFactory('js', 'js哪家强')

// 每次都要改两个地方 写一个类 再去switch里面加一下 很烦