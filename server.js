const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.listen(port, () => {
    console.log(`server listen on port ${port}`);
});