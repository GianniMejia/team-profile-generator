import Employee from "./employee.js";

export default class Manager extends Employee {
  officeNumber = null;

  getRole() {
    return "Manager";
  }

  constructor({ name, id, email, officeNumber }) {
    super({ name, id, email });

    this.officeNumber = officeNumber;
  }
}
