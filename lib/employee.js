export default class Employee {
  #name = null;
  #id = null;
  #email = null;

  getName() {
    return this.#name;
  }

  getId() {
    return this.#id;
  }

  getEmail() {
    return this.#email;
  }

  getRole() {
    return "Employee";
  }

  constructor({ name, id, email }) {
    this.#name = name;
    this.#id = id;
    this.#email = email;
  }
}
