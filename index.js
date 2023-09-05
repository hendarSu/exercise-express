// Ini import module HTTP
const http = require("http");
const url = require('url');

const UserController = require("./controller/user.controller");

const server = http.createServer( async (req, res) => {
  // const method = req.method;
  const parsedUrl = url.parse(req.url, true);
  
  const userController = new UserController();
  switch (parsedUrl.pathname) {
    case "/registrasi":
      await userController.registration(req, res);
      break;
    case "/login":
      await userController.login(req, res);
      break;
    default:
      break;
  }
});

server.listen(3000, () => {
  console.log("Server Berjalan di Port 3000!");
});
