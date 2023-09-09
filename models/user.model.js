const fs = require("node:fs/promises");

class UserModel {
  constructor(id, email, password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  async connect() {
    const file = await fs.readFile("./database/user.json", {
      encoding: "utf-8",
    });
    return eval(file);
  }

  async findByEmail(inputEmail) {
    try {
      const users = await this.connect();
      const userWithEmail = users.find((user) => user.email === inputEmail);
      return userWithEmail;
    } catch (error) {
      console.error(error);
    }
  }

  async save(body) {
    try {
      const data = await this.connect();
      data.push(body);
      await fs.writeFile("./database/user.json", JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
    }
  }

  async find() {
    try {
      const users = await this.connect();
      return users;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = UserModel;
