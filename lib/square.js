const Shape = require("./shape");

class Square extends Shape {
  constructor(color) {
    super(color);
    this.size = size;
  }

  render() {
    return `<rect x="300" y="200" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
  }
}
