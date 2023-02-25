const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Array of questions for user
const questions = [
  {
    message: "What is the team manager's name?",
    type: "input",
    name: "manager-name",
  },
  {
    message: "What is the team manager's Employee ID?",
    type: "input",
    name: "manager-id",
  },
  {
    message: "What is the team manager's Email?",
    type: "input",
    name: "manager-email",
    validate: function (email) {
  
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

      if (valid) {
        console.log("Great job");
          return true;
      } else {
          console.log(".  Please enter a valid email")
          return false;
      }
    },
  },
  {
    message: "What is the team manager's office number?",
    type: "input",
    name: "manager-office-number",
  },
  {
    message: "Please select a team member to add",
    type: "list",
    name: "employee-option",
    choices: ["Add an Engineer", "Add an Intern", "Finish building the team",]
  },

];

// Function to initialize program
function init() {
  inquirer.prompt(questions)
    .then((response) => {

    });
}

// Function call to initialize program
init();