// Ini import module HTTP
const http = require("http");
const UserController = require("./controller/user.controller");

const server = http.createServer( async (req, res) => {
  const method = req.method;
  const userController = new UserController();
  switch (method) {
    case "POST":
      await userController.registration(req, res);
      break;
    default:
      break;
  }
});

server.listen(3000, () => {
  console.log("Server Berjalan di Port 3000!");
});
