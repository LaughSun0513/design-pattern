// 订餐
const log = console.log;
// 1.包装盒
class Wrapper {
    pack() {
        return "Wrapper";
    }
}
class Bottle {
    pack() {
        return "Bottle";
    }
}

// 2.汉堡用纸盒
class Burger {
    packing() {
        return new Wrapper();
    }
}
// 饮料用杯子
class Drink {
    packing() {
        return new Bottle();
    }
}

// 3.汉堡种类
// 蔬菜汉堡
class VegBurger extends Burger {
    price() {
        return 25;
    }
    name() {
        return "蔬菜汉堡";
    }
}
// 鸡肉汉堡
class ChickenBurger extends Burger {
    price() {
        return 50;
    }
    name() {
        return "鸡肉汉堡";
    }
}
// 可乐
class Coke extends Drink {
    price() {
        return 15;
    }
    name() {
        return "可乐";
    }
}
// 百事
class Pepsi extends Drink {
    price() {
        return 15;
    }
    name() {
        return "可乐";
    }
}

// 4.单个套餐
class Meal {
    constructor() {
        const items = [];
        // 通过Reflect.defineProperty来劫持get 每次判断一下当前this是否属于Meal类
        Reflect.defineProperty(this, "items", {
            get: () => {
                if (this.__proto__ !== Meal.prototype) {
                    throw new Error("items is private");
                }

                return items;
            }
        });
    }
    // 加入单个餐食
    addItem(item) {
        log("addItem", item);
        this.items.push(item);
    }
    // 套餐价格
    getCost() {
        let cost = 0;
        for (const item of this.items) {
            cost += item.price();
        }
        return cost;
    }
    showItems() {
        for (const item of this.items) {
            const nameStr = "Item : " + item.name();
            const packStr = "Packing : " + item.packing().pack();
            const priceStr = "Price : " + item.price();
            let mealItem = `${nameStr},${packStr},${priceStr}`;
            log("showItems", mealItem);
        }
    }
}
// 建造者模式--通过多个组合生成新的大对象
class MealBuilder {
    perpareVegMeal() {
        const meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    }
    perpareChickenMeal() {
        const meal = new Meal();
        meal.addItem(new ChickenBurger());
        meal.addItem(new Pepsi());
        return meal;
    }
}

const mealBuilder = new MealBuilder();

const vegMeal = mealBuilder.perpareVegMeal();
vegMeal.showItems();
log('套餐总价格:'+ vegMeal.getCost());

const chickenBurger = mealBuilder.perpareChickenMeal();
chickenBurger.showItems();
log('套餐总价格:'+ chickenBurger.getCost());

/**
    addItem VegBurger {}
    addItem Coke {}
    showItems Item : 蔬菜汉堡,Packing : Wrapper,Price : 25
    showItems Item : 可乐,Packing : Bottle,Price : 15
    套餐总价格:40

    addItem ChickenBurger {}
    addItem Pepsi {}
    showItems Item : 鸡肉汉堡,Packing : Wrapper,Price : 50
    showItems Item : 可乐,Packing : Bottle,Price : 15
    套餐总价格:65
 */