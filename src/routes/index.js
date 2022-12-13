const express = require("express");
const atendimentosController = require("../controllers/atendimentosController");
const routes = express.Router()

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.encontrarAtendimento);
routes.post("/atendimentos", atendimentosController.cadastrarAtendimentos);



routes.get("/atendimentos/:id", (req, res) => {
    console.log(req.params);
    res.send("Mostrando atendimento desejado!");
});



module.exports = routes