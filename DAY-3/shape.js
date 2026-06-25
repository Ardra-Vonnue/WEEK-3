class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  describe() {
    console.log("shapes");
  }
  static compare(a, b) {
    return area;
  }
}
class circle extends Shape {
  constructor(name, color, radius) {
    super(name, color);
    this.radius = radius;
  }
  area() {
    return 3.14 * (this.radius * this.radius);
  }
  perimeter() {
    return 2 * 3.14 * this.radius;
  }
  describe() {
    console.log("circle");
  }
}
class rectangle extends Shape {
  constructor(name, color, breadth, length) {
    super(name, color);
    this.length = length;
    this.breadth = breadth;
  }
  area() {
    return this.length * this.breadth;
  }
  describe() {
    console.log("rectangle");
  }
}
class triangle extends Shape {
  constructor(name, color, base, height) {
    super(name, color);
    this.height = height;
    this.base = base;
  }
  area() {
    return 0.5 * (this.height * this.base);
  }
  describe() {
    console.log("triangle");
  }
}
const myCircle = new circle("one", "red", 10);

const myCircle1 = new circle("circle1", "red", 10);
const result1 = myCircle.area();
const result4 = myCircle.perimeter();
console.log("Perimeter of circle: " + Math.floor(result4));
const myRectangle = new rectangle("two", "red", 20, 10);
const result2 = myRectangle.area();
const myTriangle = new triangle("three", "red", 30, 5);
const result3 = myTriangle.area();
console.log("area of circle :" + result1);
console.log("area of rectangle :" + result2);
console.log("area of triangle :" + result3);

class shapeCollection {
  collection = [];
  area = [];
  area1 = [];
  sum = 0;
  add(Shape) {
    this.collection.push(Shape);
    return this.collection;
  }
  removeById(name) {
    const updatedItems = this.collection.filter((item) => item.name !== name);
    return updatedItems;
  }
  sortByArea() {
    this.area.push(myCircle.area());
    this.area.push(myTriangle.area());
    this.area.push(myRectangle.area());
    this.area1 = this.area.sort((a, b) => a - b);
    return this.area1;
  }
  getTotalArea() {
    for (let i = 0; i < this.area.length; i++) {
      this.sum = this.sum + this.area[i];
    }
    return this.sum;
  }
  getByType(type) {
    let types = [];
    for (let i of this.collection) {
      console.log(i.constructor.name);
      if (i.constructor.name == type) {
        types.push(i);
      }
    }
    return types;
  }
}
const myShape1 = new shapeCollection();
const myName1 = myShape1.add(myCircle);
const myShape2 = new shapeCollection();
const myName2 = myShape2.add(myTriangle);
const myShape3 = new shapeCollection();
const myName3 = myShape3.add(myRectangle);
console.log(myName1);
console.log(myName2);
console.log(myName3);
const removeId = new shapeCollection();
removeId.add(myCircle1);
removeId.add(myCircle);
removeId.add(myTriangle);
removeId.add(myRectangle);
console.log(removeId.removeById("circle1"));
console.log(removeId.sortByArea());
console.log("total area: " + removeId.getTotalArea());
console.log(removeId.getByType("triangle"));
//instanceof
console.log(myCircle instanceof circle);
//Object.getPrototypeOf()
console.log(Object.getPrototypeOf(myCircle) === circle.prototype);
//constructor.name
console.log(myCircle.constructor.name);
