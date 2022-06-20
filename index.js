// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generatorMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is your project title?",
    name: "Title"
}, {
    type: "input",
    message: "Please provide a description of your project.",
    name: "Description"
}, {
    type: "input",
    message: "Table of Contents.",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What steps are required to install your project?",
    name: "Installation"
}, {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "Usage"
}, {
    type: "input",
    message: "List all collaborators.",
    name: "Credits"
}, {
    type: "input",
    message: "Do you have any licenses?",
    name: "License"
}, {
    type: "input",
    message: "Do you have any badges?",
    name: "Badges"
}, {
    type: "input",
    message: "If your project has a lot of features, list them here.",
    name: "Features"
}, {
    type: "input",
    message: "Guidelines for how to contribute.",
    name: "Contribute"
}, {
    type: "input",
    message: "Do you have any tests for your application, if so please list examples on how to run them.",
    name: "Tests"
}, {
    type: "input",
    message: "What is your github username?",
    name: "Github"
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email"
}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generatorMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();

