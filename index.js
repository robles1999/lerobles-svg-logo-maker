const inquirer = require("inquirer");
const fs = require("fs");
const { createSVG } = require("./svg-generator"); // replace this with the name of your SVG generator module

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
  .then((answers) => {
    const svg = createSVG(
      answers.text,
      answers.textColor,
      answers.shape,
      answers.shapeColor
    );
    fs.writeFile("logo.svg", svg, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  })
  .catch((error) => console.error(error));
