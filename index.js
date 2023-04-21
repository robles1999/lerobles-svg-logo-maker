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
  .then(({ text, textColor, shape, shapeColor }) => {
    let svg;
    console.log(shape);
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
    fs.writeFile("logo.svg", svg, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  })
  .catch((error) => console.error(error));
