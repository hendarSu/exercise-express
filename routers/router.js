const express = require("express");
const userRouter = require("./user.router");
const timeLog = require("../middlewares/time-log");
const router = express.Router();

// Router Lvel Middleware
// router.use(timeLog);

router.get("/", async (req, res) => {
    res.send("welcome to latihan mvc");
});

router.use("/", userRouter);

module.exports = router;