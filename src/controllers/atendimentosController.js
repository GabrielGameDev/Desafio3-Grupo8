const Atendimentos = require("../models/Atendimentos");

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
        const { pacientes_id, data_atendimento, observacao, psicologos_id } = req.body;

        const novoAtendimento = await Atendimentos.create({
            pacientes_id,
            data_atendimento,
            observacao,
            psicologos_id,
        });

        res.json(novoAtendimento);
    },
};

module.exports = atendimentosController;