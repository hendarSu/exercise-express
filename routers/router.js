const express = require("express");
const userRouter = require("./user.router");
const router = express.Router();

router.get("/", async (req, res) => {
    res.send("welcome to latihan mvc");
});

router.use("/", userRouter);

module.exports = router;