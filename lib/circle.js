const Shape = require("./shape");

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  render() {
    return `<circle cx="300" cy="200" r="50%" fill="${this.color}" />`;
  }
}
