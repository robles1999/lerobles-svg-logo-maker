const Shape = require("../lib/shape");
const Circle = require("../lib/circle");

describe("Shape", () => {
  describe("Circle", () => {
    it("should take three initials, text color and fill color to generate a logo SVG file", () => {
      const [initials, textColor, fillColor] = ["CMR", "white", "green"];
        const circle = new Circle(initials, textColor, fillColor);
        
      expect(circle.render()).toEqual(`
    <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="white" stroke="#000000" stroke-width="2" />
            <circle cx="150" cy="100" r="90" fill="${fillColor}" />
            <text fill="${textColor}" font-size="80" text-anchor="middle" x="150" y="120">${initials}</text>
    </svg>`);
    });
  });
});
