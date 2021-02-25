// 组合模式在表单中的应用
var objectCreate = function (o) { 
    var F = function () { }
    F.prototype = o;
    return new F();
}
var inheritPrototype = function (parent,son) { 
    var p = objectCreate(parent.prototype);
    p.constructor = son;
    son.prototype = p;
}
var Form = function () { 
    this.children = [];
    this.element = null;
}
Form.prototype = {
    init: function () { },
    add: function () { },
    getElement: function () { }
}

var FormItem = function (type, parent) { 
    Form.call(this);
    this.type = type;
    this.parent = parent;
    this.init();
}
inheritPrototype(FormItem, Form);
FormItem.prototype.init = function () { 
    this.element = document.createElement('form');
    this.element.className = 'form-conatiner-' + this.type;
}
FormItem.prototype.add = function (child) { 
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
FormItem.prototype.getElement = function () { 
    return this.element;
}
FormItem.prototype.show = function () { 
    this.parent.appendChild(this.element);
}

var FieldSetItem = function (type, legend) { 
    Form.call(this);
    this.type = type || '';
    this.legendInfo = legend || '';
    this.init();
}
inheritPrototype(FieldSetItem, Form);

FieldSetItem.prototype.init = function () {
    this.element = document.createElement('fieldset');
    this.legend = document.createElement('legend');
    this.legend.innerHTML = this.legendInfo;
    this.element.appendChild(this.legend);
    this.element.className = 'fieldset-item';
}
FieldSetItem.prototype.add = function (child) { 
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
FieldSetItem.prototype.getElement = function () { 
    return this.element;
}

var Group = function () { 
    Form.call(this);
    this.init();
};
inheritPrototype(Group, Form);
Group.prototype.init = function () { 
    this.element = document.createElement('p');
    this.element.className = 'group-item';
}
Group.prototype.add = function (child) { 
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
Group.prototype.getElement = function () { 
    return this.element;
}

var LabelItem = function (type, name) { 
    Form.call(this);
    this.type = type;
    this.name = name;
    this.init();
};
inheritPrototype(LabelItem, Form);

LabelItem.prototype.init = function () { 
    this.element = document.createElement('label');
    this.element.innerHTML = this.name;
    this.element.className = 'label-' + this.type;
}
LabelItem.prototype.add = function (child) { 
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
LabelItem.prototype.getElement = function () { 
    return this.element;
}

var InputItem = function (type) { 
    Form.call(this);
    this.type = type;
    this.init();
};
inheritPrototype(InputItem, Form);
InputItem.prototype.init = function () { 
    this.element = document.createElement('input');
    this.element.setAttribute('type', 'text');
    this.element.className = 'input' + this.type;
}
InputItem.prototype.add = function (child) { 
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
InputItem.prototype.getElement = function () { 
    return this.element;
}

var SpanItem = function (text) { 
    Form.call(this);
    this.text = text;
    this.init();
};
inheritPrototype(SpanItem, Form);

SpanItem.prototype.init = function () { 
    this.element = document.createElement('span');
    this.element.innerHTML = this.text;
    this.element.className = 'span-item';
}
SpanItem.prototype.add = function (child) { 
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
SpanItem.prototype.getElement = function () { 
    return this.element;
}
var form = new FormItem('FormItem', document.body);
form
    .add(
        new FieldSetItem('account', '账号')
            .add(
                new Group()
                    .add(
                        new LabelItem('user_name','用户名:')
                    )
                    .add(
                        new InputItem('user_name')
                    )
                    .add(
                        new SpanItem('4-6位数字或字母')
                    )
            )
            .add(
                new Group()
                    .add(
                        new LabelItem('user_passwd','密码:')
                    )
                    .add(
                        new InputItem('user_passwd')
                    )
                    .add(
                        new SpanItem('6-12位数字或密码')
                    )
            )
    ).add(
        new FieldSetItem('info', '信息')
        .add(
            new Group()
                .add(
                    new LabelItem('name','昵称:')
                )
                .add(
                    new InputItem('name')
                )
                .add(
                    new SpanItem('不超过10位字符串')
                )
        )
        .add(
            new Group()
                .add(
                    new LabelItem('status','状态:')
                )
                .add(
                    new InputItem('status')
                )
                .add(
                    new SpanItem('')
                )
        )
    )
    .show()
