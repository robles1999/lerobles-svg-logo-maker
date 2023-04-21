const Shape = require("./shape");

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `
    <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="white" stroke="#000000" stroke-width="2" />
            <polygon points="10,190 290,190 150,10" fill="${this.shapeColor}"/>
            <text fill="${this.textColor}" font-size="75" text-anchor="middle" x="155" y="160">${this.text}</text>
    </svg>`;
  }
}
module.exports = Triangle;
