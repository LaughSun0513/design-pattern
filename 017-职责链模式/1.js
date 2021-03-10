var fetch = function(parmas, dealType, dom) {
    var ajax = new XHRHttpRequest();
    var url = 'getData.php?mod=userInfo';

    ajax.onload = function(event) {
        if (event.status >= 200 && event.status < 300) {
            dealData(ajax.responseText, dealType, dom)
        } else {
            log('请求失败')
        }
    }
    for (var i in parmas) {
        url += '&' + i + '=' + parmas[i];
    }
    ajax.open('get', url, true);
    ajax.send();
};

var dealData = function(responseText, dealType, dom) {
    var response = Object.prototype.toString.call(responseText);
    if (dealType === 'sug') {
        if (response === '[object Array]') {
            // 返回值是数组
            return createSug(responseText, dom);
        } else if (response === '[object Object]') {
            // 返回值是对象
            var newArr = Object.values(responseText);
            return createSug(newArr, dom);
        }
    } else if (dealType === 'validate') {
        return createValidate(responseText, dom)
    }
}

var createSug = function(arrData, dom) {
    var html = ''
    for (var i = 0; i < arrData.length; i++) {
        html += '<li>' + arrData[i] + '</li>';
    }
    dom.parentNode.getElementsByTagName('ul')[0].innerHTML = html;
}
var createValidate = function(message, dom) {
    dom.parentNode.getElementsByTagName(span)[0].innerHTML = message;
}

dealData('用户名不对', 'validate', input[0]);
dealData(123, 'sug', input[1]);
dealData({
  a:'1',
  b:'2'
}, 'sug', input[1]);
