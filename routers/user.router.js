const express = require("express");
const UserExpressController = require("../controllers/user.express.controller");
const registrationValidate = require("../middlewares/users/registration-validate");
const userRouter = express.Router();
const userExpressController = new UserExpressController();

userRouter.get("/registrasi", userExpressController.indexRegistrasi);
userRouter.post("/registrasi", registrationValidate, userExpressController.registration);

userRouter.post("/login", userExpressController.login);

userRouter.get("/users", userExpressController.getAll);

module.exports = userRouter;