const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdwon");
const fs = require("fs");
const questions = require("./questions");

//function to write README file
function writeTofile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("success!");
  });
}

//function to initialize program

function init() {
  inquirer.prompt(questions).then(function (data) {
    writeTofile("README.md", generateMarkdown(data));
  });
}

//function call to initialize program

init();
