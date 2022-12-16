const Atendimentos = require("../models/Atendimentos");
const Pacientes = require('../models/Pacientes');

const atendimentosController = {
    listarAtendimentos: async (req, res) => {

        const listarAtendimentos = await Atendimentos.findAll();

        res.json(listarAtendimentos);
    },

    encontrarAtendimento: async (req, res) => {

        const encontrarAtendimento = await Atendimentos.findByPk(req.params.id);

        if (encontrarAtendimento == null) {
            return res.status(404).json("Id não encontrado");
        };

        res.json(encontrarAtendimento);
    },

    async cadastrarAtendimentos(req, res) {
        console.log(req.auth.id)
        
        console.log(req.body.pacientes_id)

        const psicologoId = req.auth.id;

        const pacienteExiste = await Pacientes.findByPk(req.body.pacientes_id);

        if (pacienteExiste == null) {
            return res.status(404).json("Id do paciente não encontrado");
        };

        const { pacientes_id, data_atendimento, observacao} = req.body;

        const novoAtendimento = await Atendimentos.create({
            pacientes_id,
            data_atendimento,
            observacao,
            psicologos_id: psicologoId,
        });

        return res.status(201).json(novoAtendimento);
    },
};

module.exports = atendimentosController;