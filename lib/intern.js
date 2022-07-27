import Employee from "./employee.js";

export default class Intern extends Employee {
  #school = null;

  getSchool() {
    return this.#school;
  }

  getRole() {
    return "Intern";
  }

  constructor({ name, id, email, school }) {
    super({ name, id, email });

    this.#school = school;
  }
}
