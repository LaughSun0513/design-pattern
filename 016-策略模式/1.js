var PriceStrategy = function(){
  var stragtegy = {
    //100返30
    return30: function(price){
      return +price + parseInt(price/100)*30;
    },
    //100返50
    return50:function(price){
      return +price + parseInt(price/100)*50;
    },
    // 9折 JS在处理小数乘除法有bug 故转化为整数
    percent90:function(price){
      return price * 100 * 90 / 1000
    },
    // 8折
    percent80:function(price){
      return price * 100 * 80 / 1000
    },
    // 5折
    percent80:function(price){
      return price * 100 * 50 / 1000
    }
  };

  return function(choose, price){
    var curStragtegyFunc = stragtegy[choose];
    return curStragtegyFunc && curStragtegyFunc(price);
  }
}();

var priceCase = PriceStrategy('return50','314.67');
console.log(priceCase)
