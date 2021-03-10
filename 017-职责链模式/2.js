const log = console.log;

class AbstractLogger {
  constructor(){
    if(new.target == AbstractLogger){
      throw new Error('这个抽象类必须被继承 不让new')
    }
  }
  setNextLogger(nextLogger){
    this.nextLogger = nextLogger;
  }
  write(message){
    //
  }
  // 关键运行函数 通过对比级别 如果有级别低的就直接输出 如果还有下一级别小的 继续输出递归调用
  logMessage(level, meaage){
    if(this.level <= level){
      this.write(meaage)
    }
    if(this.nextLogger !=  null){
      this.nextLogger.logMessage(level, meaage);
    }
  }
}
AbstractLogger.info = 1;
AbstractLogger.debug = 2
AbstractLogger.error = 3;

class InfoLogger extends AbstractLogger {
  constructor(level){
    super();
    this.level = level;
  }
  write(message){
    log('info日志:', message);
  }
}
class DebugLogger extends AbstractLogger {
  constructor(level){
    super();
    this.level = level;
  }
  write(message){
    log('debug日志:', message);
  }
}
class ErrorLogger extends AbstractLogger {
  constructor(level){
    super();
    this.level = level;
  }
  write(message){
    log('eror日志:', message);
  }
}

function getChainOfLoggers(){
  const infoLog = new InfoLogger(AbstractLogger.info); // 1
  const debugLog = new DebugLogger(AbstractLogger.debug); // 2
  const errorLog = new ErrorLogger(AbstractLogger.error); // 3

  // 关键: 链式化 大级别的套小级别的
  errorLog.setNextLogger(debugLog);
  debugLog.setNextLogger(infoLog);
  return errorLog;
}

const loggerChain = getChainOfLoggers();

loggerChain.logMessage(AbstractLogger.info,'~~~~info');
log(' ')
loggerChain.logMessage(AbstractLogger.debug,'~~~~debug');
log(' ')
loggerChain.logMessage(AbstractLogger.error,'~~~~error');

/**
info日志: ~~~~info

debug日志: ~~~~debug
info日志: ~~~~debug

eror日志: ~~~~error
debug日志: ~~~~error
info日志: ~~~~error
 */
