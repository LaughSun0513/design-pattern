// 股东 - 老板 - HR -员工
const log = console.log;

class FindPeople { 
    constructor(name, work, money) { 
        this.name = name;
        this.work = work;
        this.money = money;
        this.xiaodiArr = []; // 级别高的管小弟就好了 不需要关心上级
    }
    add(oneXiaodi) { 
        this.xiaodiArr.push(oneXiaodi);
    }
    remove(oneXiaodi) { 
        const deleteXiaoDiIndex = this.xiaodiArr.indexOf(oneXiaodi);
        this.xiaodiArr.splice(deleteXiaoDiIndex, 1);
    }
    getXiaoDi() { 
        return this.xiaodiArr;
    }
    toString() { 
        return `【小弟】${this.name},干【${this.work}】的, 一问【工资】${this.money}`;
    }
}

const CEO = new FindPeople('张三', 'CEO', 20000000);
const Boss = new FindPeople('李四', '老板', 10000000);

const HR = new FindPeople('妲己1号', 'HR', 5000);

const FE_BOSS = new FindPeople('前端小张', 'FE主管', 30000);
const FE1 = new FindPeople('前端小三', 'FE小弟', 10000);
const FE2 = new FindPeople('前端小四', 'FE小弟', 10000);

CEO.add(Boss);
Boss.add(HR);
HR.add(FE_BOSS);

FE_BOSS.add(FE1);
FE_BOSS.add(FE2);

function printXiaoDi(boss) {
    const xiaoDiArr = boss.getXiaoDi();
    for (const xiaoDi of xiaoDiArr) {
        log(xiaoDi.toString());
        if (xiaoDi.getXiaoDi().length > 0) { 
            printXiaoDi(xiaoDi);
        }
    }
}
printXiaoDi(CEO);
/** 
【小弟】李四,干【老板】的, 一问【工资】10000000
【小弟】妲己1号,干【HR】的, 一问【工资】5000
【小弟】前端小张,干【FE主管】的, 一问【工资】30000
【小弟】前端小三,干【FE小弟】的, 一问【工资】10000
【小弟】前端小四,干【FE小弟】的, 一问【工资】10000
*/


