const express = require("express")
const psicologosController = require("../controllers/psicologosController")
const atendimentosController = require("../controllers/atendimentosController");
const pacientesController = require("../controllers/pacientesController");
const authController = require("../controllers/authController");
const pacienteCreateValidation = require("../validations/pacientes/create")
const psicologoCreateValidation = require("../validations/psicologos/create")
const psicologoUpdateValidation = require("../validations/psicologos/update")
const authLoginValidation = require("../validations/auth/login")
const auth = require("../middlewares/auth")
const routes = express.Router()


//criar um psicologo
routes.post("/psicologos", psicologoCreateValidation, psicologosController.criarPsicologo);
//listar psicologos
routes.get("/psicologos", psicologosController.listarPsicologos);
//listar um psicologo
routes.get("/psicologos/:id", psicologosController.listarPsicologo);
//delete psicologo
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
//update psicologo
routes.put("/psicologos/:id", psicologoUpdateValidation, psicologosController.atualizarPsicologo);

routes.post("/login", authLoginValidation, authController.login);

//listar pacientes
routes.get("/pacientes", pacientesController.listarPacientes);
//listar um paciente
routes.get("/pacientes/:id", pacientesController.listarPaciente);
//criar um paciente
routes.post("/pacientes", pacienteCreateValidation, pacientesController.criarPaciente);
//atualizar um paciente
routes.put("/pacientes/:id", pacienteCreateValidation, pacientesController.atualizarPaciente);
//deletar um paciente
routes.delete("/pacientes/:id", pacientesController.deletarPaciente)


//listar atendimentos
routes.get("/atendimentos", atendimentosController.listarAtendimentos);
//listar um atendimento
routes.get("/atendimentos/:id", atendimentosController.encontrarAtendimento);
//criar um atendimento
routes.post("/atendimentos", auth, atendimentosController.cadastrarAtendimentos);



routes.get("/atendimentos/:id", (req, res) => {
    console.log(req.params);
    res.send("Mostrando atendimento desejado!");
});


module.exports = routes