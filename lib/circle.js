const Shape = require("./shape");

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<circle cx="300" cy="200" r="50%" fill="${this.color}" />`;
  }
}
