const UserModel = require("../models/user.model");

class UserService {
  constructor() {
    this.userModel = new UserModel();
  }

  async findByEmail(inputEmail) {
    const email = await this.userModel.findByEmail(inputEmail);
    return email;
  }

  async registration(payload) {
    try {
      // 1 validasi user terdaptar atau belum
      const { email } = payload;
      console.log(email);
      const user = await this.findByEmail(email);
      console.log(user);
      if (user) {
        throw new Error("User sudah terdaptar!")
      }

      // 2 store data request to db
      const userNew = new UserModel(payload.id, payload.email, payload.password);
      await this.userModel.save(userNew);

      return "User berhasil di simpan!"
   } catch (error) {
      throw error;
    }
  }

  /**
   * ini service login
   * @param {*} payload 
   */
  async login(payload) {
    const { email } = payload;
    const { password } = payload;
    const user = await this.findByEmail(email);
    // 1 validasi email, email terdaftar atau tidak, kalau tidak errorkan user tidak terdaftar.
    if (!user) {
      throw new Error("User tidak ditemukan")
      // 2 check password, kalau sama sukses kalau beda trow error password tidak sesuai
    } else if (password!=user.password){
      throw new Error ("Password salah !!")
    }
    // 3 kasih message berhasil login ketika email dan password berhasil. 
    return ("Anda berhasil log-in")
  }

  async getAll() {
    try {
      return await this.userModel.find();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
