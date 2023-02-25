// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Manager = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, email, officeNumber);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}