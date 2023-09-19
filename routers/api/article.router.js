const express = require("express")
const articleRouter = express.Router()

articleRouter.get("/", (req,res)=> {
       res.send("ini endpoint get article")
})



module.exports = articleRouter 
