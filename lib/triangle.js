const Shape = require("./shape");

class Triangle extends Shape {
  constructor(base, height, color) {
    super(color);
    this.base = base;
    this.height = height;
  }

  render() {
    return `<polygon points="75,25 150,${this.height + 25} 225,25" fill="${
      this.color
    }" />`;
  }
}
