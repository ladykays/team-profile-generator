// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Engineer = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    super(name, id, email, school);
    this.school = school;
  }

  getSchool() {

  }

  getRole() {
    return "Intern";
  }
}