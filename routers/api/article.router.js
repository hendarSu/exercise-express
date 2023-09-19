const express = require("express")
const articleRouter = express.Router()

articleRouter.get("/", (req,res)=> {
       res.send("method GET")
})
articleRouter.post("/", (req,res)=> {
       res.send("method POST")
})
articleRouter.put("/:id", (req,res)=> {
       const {id} = req.params
       res.send(`method PUT dengan id : ${id}`)
})
articleRouter.delete("/:id", (req,res)=> {
       const {id} = req.params
       res.send(`method DELETE dengan id: ${id}`)
})



module.exports = articleRouter 
