var log = console.log;

var Strategy = function() {
    var strategyObj = {
        strategy1: function(value) {
            log('策略函数1')
        },
        strategy2: function(value) {
            log('策略函数2')
        },
        strategy3: function(value) {
            log('策略函数3')
        }
    };
    return {
        check: function(type, value) {
            var strategyFn = strategyObj[type]
            return strategyFn ? strategyFn(value) : '没找到对应的策略函数';
        },
        addStrategy: function(type, fn) {
            strategyObj[type] = fn;
        }
    }
}();
Strategy.addStrategy('strategy4',function(){
  log('策略函数4')
});

Strategy.check('strategy1');
Strategy.check('strategy2');
Strategy.check('strategy3');
Strategy.check('strategy4');
