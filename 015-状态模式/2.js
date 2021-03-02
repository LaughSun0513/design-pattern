const log = console.log;

class Action1 {
  doAction(context){
    context.setState(this);
  }
  toString(){
    return 'Action1 State';
  }
}
class Action2 {
  doAction(context){
    context.setState(this);
  }
  toString(){
    return 'Action2 State';
  }
}
class Context {
  constructor(state){
    this.state = state;
  }
  setState(state){
    this.state = state;
  }
  getState(){
    return this.state.toString();
  }
}
const context = new Context();

const action1 = new Action1();
action1.doAction(context);

log(context.getState());

const action2 = new Action2();
action2.doAction(context);

log(context.getState());

/**
   Action1 State
   Action2 State
 */
