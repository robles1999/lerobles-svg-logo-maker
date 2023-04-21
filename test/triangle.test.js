const Triangle = require("../lib/triangle");

describe("Triangle", () => {
  it("should take three initials, text color and fill color to generate a logo SVG file in a triangle shape", () => {
    const [text, textColor, shapeColor] = ["ABC", "white", "green"];
    const triangle = new Triangle(text, textColor, shapeColor);

    expect(triangle.render()).toEqual(`
    <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="white" stroke="#000000" stroke-width="2" />
            <polygon points="10,190 290,190 150,10" fill="${shapeColor}"/>
            <text fill="${textColor}" font-size="75" text-anchor="middle" x="155" y="160">${text}</text>
    </svg>`);
  });
});
