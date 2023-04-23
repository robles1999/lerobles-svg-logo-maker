const Square = require("../lib/square");

describe("Square", () => {
  it("should take three initials, text color and fill color to generate a logo SVG file in square shape", () => {
    const [text, textColor, shapeColor] = ["CMR", "white", "green"];
    const square = new Square(text, textColor, shapeColor);

    expect(square.render()).toEqual(`
    <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="white"/>
            <rect x="50" y="50" width="200" height="100" fill="${shapeColor}" />
            <text fill="${textColor}" font-size="80" text-anchor="middle" x="150" y="120">${text}</text>
    </svg>`);
  });
});
