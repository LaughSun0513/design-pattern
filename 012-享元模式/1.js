// 利用Map或其它方式减少重复创建相同类型的实例对象
class Circle { 
    constructor(color) { 
        this.color = color;
    }
    setX(x) { 
        this.x = x;
    }
    setY(y) { 
        this.y = y;
    }
    setZ(z) { 
        this.z = z;
    }
    draw() { 
        console.log(`x:${this.x},y:${this.y},z:${this.z}`);
    }
}

class ShapeFactory { 
    static getCircle(color) {
        let circle = ShapeFactory.circleMap.get(color);
        if (circle == null) { 
            circle = new Circle(color);
            ShapeFactory.circleMap.set(color, circle);
            console.log('Creating circle of color', color);
        }
        return circle;
    }
}
ShapeFactory.circleMap = new Map();

const colors =["Red", "Green", "Blue", "White", "Black" ];
for (let i = 0; i < 20; i++) {
    let curColor = colors[Math.floor(Math.random() * colors.length)];
    const circle = ShapeFactory.getCircle(curColor);
    circle.setX(Math.floor(Math.random()*100));
    circle.setY(Math.floor(Math.random()*100));
    circle.setZ(100);
    circle.draw();
}
/*
Creating circle of color Black
x:38,y:81,z:100
Creating circle of color Green
x:83,y:29,z:100
Creating circle of color Blue
x:33,y:54,z:100
Creating circle of color Red
x:47,y:72,z:100
x:66,y:52,z:100
Creating circle of color White
x:31,y:27,z:100
x:79,y:21,z:100
x:43,y:73,z:100
x:85,y:9,z:100
x:64,y:84,z:100
x:59,y:18,z:100
x:93,y:39,z:100
x:89,y:94,z:100
x:32,y:99,z:100
x:38,y:39,z:100
x:59,y:16,z:100
x:81,y:39,z:100
x:96,y:41,z:100
x:75,y:70,z:100
x:94,y:95,z:100
*/
