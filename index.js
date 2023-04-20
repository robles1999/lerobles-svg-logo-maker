const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/circle");

//:::::::::::::::::: questions :::::::::::::::::::::::::::
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters:",
      validate: (input) => input.length <= 3,
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color:",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color:",
    },
  ])
  .then(({ text, textColor, shape, shapeColor }) => {
    console.log(shape);
    switch (shape) {
      case "circle":
        console.log(`The shape is a ${shape}`);
        const circle = new Circle(text, textColor, shapeColor);
        console.log(`Returned from circle: ${circle.render()}`);
        break;
    }
    // fs.writeFile("logo.svg", svg, (err) => {
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     console.log("Generated logo.svg");
    //   }
    // });
  })
  .catch((error) => console.error(error));
