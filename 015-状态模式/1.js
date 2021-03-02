var log = console.log;

// case1
var curAction = '';

function changeAction(action) {
    if (action === '1') {
        log('1')
    } else if (action === '2') {
        log('2')
    } else if (action === '3') {
        log('3')
    }
    curAction = action;
}
changeAction('1')

// case2
var curAction2 = '';
var curAction3 = '';

function changeAction(action2, action3) {
    if (action2 === '1' && action3 === '1') {
        log('1')
    } else if (action2 === '2' && action3 === '2') {
        log('2')
    } else if (action2 === '3' && action3 === '3') {
        log('3')
    }
    curAction2 = action2 || '';
    curAction3 = action3 || ''
}

//------------上面全是if-else 写吐了------------------
var ChangeState = function() {
    var _currentState = {};
    // 状态模式的优点也是缺点
    // 优点在于 可以通过定义对象将一系列状态封装起来
    // 缺点在于：如果只关心单个状态的使用 不关心其他状态情况 就不太适合 这种情况更适合策略模式
    var states = {
        state1: function() {
            log('1')
        },
        state2: function() {
            log('2')
        },
        state3: function() {
            log('3')
        },
    }
    var Action = {
        changeState: function() {
            _currentState = {};
            if (arguments.length) {
                for (var i = 0; i < arguments.length; i++) {
                    var curStateKey = arguments[i];
                    _currentState[curStateKey] = true;
                }
            }
            return this;
        },
        run: function(){
          log('触发动作')
          for(var i in _currentState){
            var curStateFunc = states[i];
            curStateFunc && curStateFunc();
          }
          return this;
        }
    }
    return {
      add: Action.changeState,
      run: Action.run
    }
}
// 第一种调用方式
ChangeState()
  .add('state1','state2')
  .run()
  .add('state3')
  .run();

// 第二种调用方式
var changeStateObj = new ChangeState();
changeStateObj
  .add('state3','state2')
  .run()
  .add('state1')
  .run();
