const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");

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
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color:",
    },
  ])
  // ::::: deconstruct the object to pass info to the shape class
  .then(({ text, textColor, shape, shapeColor }) =>
  {
    // ::::: will hold the generated svg tag returned from the selected shape class
    let svg;
    // ::::: will create a new shape object based on shape selected, make a call
    // ::::: to the render method and return the svg tag
    switch (shape) {
      case "circle":
        svg = new Circle(text, textColor, shapeColor).render();
        break;
      case "square":
        svg = new Square(text, textColor, shapeColor).render();
        break;
      case "triangle":
        svg = new Triangle(text, textColor, shapeColor).render();
        break;
    }
    // ::::: generate the logo.svg file and log message to the terminal
    fs.writeFile("logo.svg", svg, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  })
  .catch((error) => console.error(error));
