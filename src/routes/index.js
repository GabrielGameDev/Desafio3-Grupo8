const express = require("express")
const psicologos = require("../controllers/psicologos")
const atendimentosController = require("../controllers/atendimentosController");
const routes = express.Router()

//criar um psicologo
routes.post("/psicologos", psicologos.criarPsicologo)
//listar psicologos
routes.get("/psicologos", psicologos.listarPsicologos)
//listar um psicologo
routes.get("/psicologos/:id", psicologos.listarPsicologo)
//delete psicologo
routes.delete("/psicologos/:id", psicologos.deletarPsicologo)
//update psicologo
routes.put("/psicologos/:id", psicologos.atualizarPsicologo)


//atendimentos
routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.encontrarAtendimento);
routes.post("/atendimentos", atendimentosController.cadastrarAtendimentos);



routes.get("/atendimentos/:id", (req, res) => {
    console.log(req.params);
    res.send("Mostrando atendimento desejado!");
});


module.exports = routes