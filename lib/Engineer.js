// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Engineer = require("./Employee");

class Engineer extends Employee {
  constructor(github) {
    super(name, id, email, github);
    this.github = github;
  }

  getGithub() {

  }

  getRole() {
    return "Engineer";
  }
}