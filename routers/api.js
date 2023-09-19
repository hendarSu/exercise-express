const express = require("express")
const articleRouter = require("./api/article.router")
const apiRouter = express.Router()

apiRouter.use("/v1/articles", articleRouter)

module.exports = apiRouter 
