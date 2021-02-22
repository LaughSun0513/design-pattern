### 设计模式的学习
#### 简单工厂模式
自我理解: 通过不同type的类型生成不同的实例对象
比如: 各种小形状 通过工厂来对不同的type 生成形状的对象 颗粒度更小

#### 抽象工厂模式
自我理解: 对简单工厂的抽象，工厂的工厂, 把所有工厂收集起来生成一个工厂函数,然后根据type来选择创建哪个工厂函数
比如：形状的工厂 颜色的工厂  通过形状的type和颜色的type来生成对应的工厂(调用这个抽象工厂) 颗粒度大一点

#### 建造者模式
自我理解: 写颗粒度很细的对象，然后组合在一起，生成一个更复杂的对象，更加关心每一步的实现过程
比如: 汉堡+饮料 --> 香辣鸡翅+可乐 --> 套餐1

#### 原型模式 
自我理解1: 创建对象过程中，可以公用不咋变的方法和属性可以写在原型对象上来共享，因为是引用类型
实现方式: 通过call去复制基础类的属性，通过new去复制基础类的方法

自我理解2: 遇到构造函数constructor比较复杂 或者 耗时比较长 或者 需要通过多个对象拼凑出来的 不要用new 直接复制的方式
实现方式: 搞一个函数，把属性和方法全部复制到这个缓存函数的prototype上

自我理解3: 浅拷贝和深拷贝

#### 单例模式 
自我理解: 对象永远是那一个
