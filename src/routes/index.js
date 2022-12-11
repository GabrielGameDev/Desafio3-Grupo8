const express = require("express")
const routes = express.Router()

routes.get("/", (req, res) => {
    res.send("Hello World");
    })

routes.post("/psicologos", (req, res) => {    
    res.json(req.body);
})


module.exports = routes