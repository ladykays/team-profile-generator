// Import classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Import packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Directories of files being generated
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html"); // join takes the path segments and applies the correct operating system seperator to the path

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teamArr = [];

const managerQuestions = [
  {
    type: "input",
    message: "What is the team Manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the team Manager's employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the team Manager's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the team Manager's office number?",
    name: "officeNumber",
  },
];
//console.log(managerQuestions[4].choices[0]);
const menuQuestion = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "menu",
    choices: ["Add an Engineer", "Add an Intern", "Finish building the team"],
  },
];
//console.log(menuQuestion[0].choices[0]);
const engineerQuestions = [
  {
    type: "input",
    message: "What is the Engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Engineer's employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Engineer's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Engineer's GitHub username?",
    name: "github",
  },

];

const internQuestions = [
  {
    type: "input",
    message: "What is the Intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Intern's employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Intern's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Intern's school?",
    name: "school",
  },

];


// Function to write information to file
async function writeToFile(outputPath, data) {
  try {
    // create a directory for the file
    await fs.promises.mkdir(OUTPUT_DIR, { recursive: true });

    // write the data to the file
    await fs.promises.writeFile(outputPath, data);

    console.log("File added to team.html");
  } catch (err) {
    console.error(err);
  }
}

// Function to initialize program
function init() {
  console.log("Welcome to the team builder!");
  inquirer.prompt(managerQuestions).then((response) => {
    let manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );

    teamArr.push(manager);
    //console.log(teamArr);
    writeToFile(outputPath, render(teamArr));
    console.log(`Added ${manager.name} as the team manager.`);
    
    addTeamMember();
  });
}

function addTeamMember() {
    inquirer.prompt(menuQuestion).then((response) => {
      if (response.menu === "Add an Engineer") {
        inquirer.prompt(engineerQuestions).then((response) => {
          let engineer = new Engineer(
            response.name,
            response.id,
            response.email,
            response.github
          );
          teamArr.push(engineer);
          writeToFile(outputPath, render(teamArr));
          console.log(`Added ${engineer.name} as a team member.`);
          addTeamMember();
        });
      } else if (response.menu === "Add an Intern") {
        inquirer.prompt(internQuestions).then((response) => {
          let intern = new Intern(
            response.name,
            response.id,
            response.email,
            response.school
          );
          teamArr.push(intern);
          writeToFile(outputPath, render(teamArr));
          console.log(`Added ${intern.name} as a team member.`);
          addTeamMember();
        });
      } else if (response.menu === "Finish building the team") {
        writeToFile(outputPath, render(teamArr));
        console.log(
          "You have finished building your team. Head up to team.html to view your team"
        );
        return;
      }

    });

}

init();