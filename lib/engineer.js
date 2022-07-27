import Employee from "./employee.js";

export default class Engineer extends Employee {
  #github = null;

  getGithub() {
    return this.#github;
  }

  getRole() {
    return "Engineer";
  }

  constructor({ name, id, email, github }) {
    super({ name, id, email });

    this.#github = github;
  }
}
