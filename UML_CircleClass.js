// Task-2 https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
const Circle = class {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  setRadius() {
    return (radius = 2.0);
  }
  getColor() {
    return this.color;
  }
  setColor() {
    return color = "blue";
  }
};
const color = new Circle();
console.log(color)


