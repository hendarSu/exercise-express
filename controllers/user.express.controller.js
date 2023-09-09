const UserService = require("../services/user.service");

class UserExpressController {
    async registration(req, res) {
        try {
            const bodyJson = req.body;
            // call service registrasi.
            const userService = new UserService();
            const registrasi = await userService.registration(bodyJson);

            res.status(201).json({ message: registrasi, status: "success", code: 201 });
        } catch (error) {
            // throw error
            res.status(400).json({ message: error.message, status: "fail", code: 400 });
        }
    }

    async login(req, res) {
        try {
            const bodyJson = req.body;
            // call service registrasi.
            const userService = new UserService();
            const login = await userService.login(bodyJson);
            res.status(200).json({ message : login, status: "success", code : 200 });
          } catch (error) {
            res.status(400).json({ message : error.message, status: "fail", code : 400 });
          }
    }

    async getAll(req, res) {
        try {
            const userService = new UserService();
            const users = await userService.getAll();
            res.render("user", { users });
        } catch (error) {
            res.status(400).json({ message : error.message, status: "fail", code : 400 });
        }
    }
}

module.exports = UserExpressController;
