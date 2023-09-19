const express = require("express");
const userRouter = require("./web/user.router");
const timeLog = require("../middlewares/time-log");
const errorNotFound = require("../middlewares/error-handling/error-not-found");
const apiRouter = require("./api");
const router = express.Router();

// Router Lvel Middleware
// router.use(timeLog);

router.get("/", async (req, res) => {
    res.send("welcome to latihan mvc");
});

router.use("/", userRouter);

router.get('/api/info', (req, res) => {
    res.send("Ping Me to test is working!");
})

router.use("/api", apiRouter)

router.use("/api", errorNotFound);


module.exports = router;