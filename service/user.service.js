const UserModel = require("../model/user.model");

class UserService {
  constructor() {
    this.userModel = new UserModel();
  }
  async findByEmail(inputEmail) {
    const email = await this.userModel.findByEmail(inputEmail);
  }
}

module.exports = UserService;
