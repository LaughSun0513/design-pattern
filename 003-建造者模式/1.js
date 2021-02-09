// -----------建造者模式:名字挺玄乎 其实就是多个对象组合成一个复杂的对象---------------------
// ------我的理解: 用小颗粒的对象们拼凑成一个牛逼的大对象，每个小对象职责单一，方便维护---------
// -------------比如： 一份简历的生成-------------------------------

// 1.每个人有不同的 兴趣爱好+技能
var Human = function (hobby, skill) { 
    this.hobby = hobby || '保密';
    this.skill = skill || '保密';
}
Human.prototype = {
    getHobby: function () { 
        return this.hobby;
    },
    getSkill: function () { 
        return this.skill;
    }
}

// 2. 姓+名
var Name = function (name) { 
    this.name = name;
    if (name.indexOf(' ') > -1) {
        var splitNameIndex = name.indexOf(' ');
        this.firstName = name.slice(0, splitNameIndex);
        this.secondName = name.slice(splitNameIndex);
    }
}
// 3. 职位 + 描述
var Work = function (workType) { 
    switch (workType) { 
        case 'CODE':
            this.work = 'coder';
            this.workDesc = '敲代码';
            break;
        
        case 'UI':
        case 'UE':
            this.work = 'designer';
            this.workDesc = '设计师';
            break;
        
        case 'TEACH':
            this.work = 'teacher';
            this.workDesc = '老师';
            break;
        
        default:
            this.work = 'unknow';
            this.workDesc = '不知道啥职业';
    }
}
Work.prototype.changeWork = function (work) { 
    this.work = work;
}
Work.prototype.changeWorkDesc = function (workDesc) { 
    this.workDesc = workDesc;
}

// 建造一个求职者
var PersonFindJob = function (name, work) { 
    var person = new Human();
    person.name = new Name(name);
    person.work = new Work(work);
    return person;
}

var xiaoMing = new PersonFindJob('xiao ming', 'CODE');
console.log(xiaoMing);
/** 
{
    hobby: '保密',
    skill: '保密',
    name: Name { name: 'xiao ming', firstName: 'xiao', secondName: ' ming' },
    work: Work { work: 'coder', workDesc: '敲代码' }
}
*/