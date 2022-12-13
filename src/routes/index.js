const express = require("express")
const psicologos = require("../controllers/psicologos")
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

module.exports = routes