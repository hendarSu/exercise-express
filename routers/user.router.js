const express = require("express");
const UserExpressController = require("../controllers/user.express.controller");
const userRouter = express.Router();
const userExpressController = new UserExpressController();

userRouter.post("/registrasi", userExpressController.registration);
userRouter.post("/login", userExpressController.login);
userRouter.get("/users", userExpressController.getAll);

module.exports = userRouter;