const express = require("express");
const router = require("./routers/router");
// const logger = require("./middlewares/logger");
const morgan = require("morgan");
const errorNotFound = require("./middlewares/error-handling/error-not-found");

const errorNotFoundView = require("./middlewares/error-handling/error-not-found-view");
const errorServer = require("./middlewares/error-handling/error-server");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

// Third party middleware
app.use(morgan("dev"))

// Application level middleware
// app.use(logger);

// Buit in Middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(router);

// Error Handling middleware
app.use(errorNotFoundView);
app.use(errorServer);

app.listen(port, () => {
    console.log(`server listen on port ${port}`);
});