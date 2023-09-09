const UserService = require("../services/user.service");

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async login(req, res) {
    let body = ""
    req.on("data",async(chunk)=>{
      body+=chunk
    })

    req.on("end", async () => {
      try {
        const bodyJson = JSON.parse(body);
        // call service registrasi.
        const login = await this.userService.login(bodyJson);

        res.writeHead(201, { "Content-Type" : "application/json" });
        res.end(JSON.stringify({ message : login, status: "success", code : 201 }, null, 2));
      } catch (error) {
        res.writeHead(400, { "Content-Type" : "application/json" });
        res.end(JSON.stringify({ message : error.message, status: "fail", code : 400 }, null, 2));
      }
    })
    // sesuikan req dan response sesuai fitur login
    // payload atau request body { email, password };
  }

  async registration(req, res) {
    // Mapping body
    let body = "";
    req.on("data", async(chunk) => {
      body += chunk;
    });

    // Running proses
    req.on("end", async () => {
      try {
        const bodyJson = JSON.parse(body);
        // call service registrasi.
        const registrasi = await this.userService.registration(bodyJson);

        res.writeHead(201, { "Content-Type" : "application/json" });
        res.end(JSON.stringify({ message : registrasi, status: "success", code : 201 }, null, 2));
      } catch (error) {
        res.writeHead(400, { "Content-Type" : "application/json" });
        res.end(JSON.stringify({ message : error.message, status: "fail", code : 400 }, null, 2));
      }
    })

  }
}

module.exports = UserController;
