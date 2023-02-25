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

// Menu
const menu =   {
  message: "Please select a team member to add",
  type: "list",
  name: "employee-option",
  choices: ["Add an Engineer", "Add an Intern", "Finish building the team"],
}

// Array of initial questions for user
const initialQuestions = [
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
];

// Engineer questions
const addEngineer = [
  {
    message: "What is the Engineer's name?",
    type: "input",
    name: "engineer-name",
  },
  {
    message: "What is the Engineer's ID?",
    type: "input",
    name: "engineer-id",
  },
  {
    message: "What is the Engineer's Email?",
    type: "input",
    name: "engineer-email",
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
    message: "What is the Engineer's GitHub username?",
    type: "input",
    name: "engineer-github",
  },
]

// Intern questions
const addIntern = [
  {
    message: "What is the Intern's name?",
    type: "input",
    name: "intern-name",
  },
  {
    message: "What is the Intern's ID?",
    type: "input",
    name: "intern-id",
  },
  {
    message: "What is the Intern's Email?",
    type: "input",
    name: "intern-email",
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
    message: "What school does the Intern attend?",
    type: "input",
    name: "inten-school",
  },
]

// Function to write information to file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log("File added to teams.html")
  );
}

// Function to initialize program
function init() {
  inquirer.prompt(initialQuestions)
    .then((response) => {
      const teamsPage = render(response);
      writeToFile("outputPath", teamsPage + "\n", (err) => {
        console.error("There was an error processing the response. Please try again.");
      });
    });
}

// Function call to initialize program
init();