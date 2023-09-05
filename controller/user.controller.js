const UserService = require("../service/user.service");

class UserController {
  constructor() {
    this.userService = new UserService();
  }
}

module.exports = UserController;
