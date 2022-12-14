const Pacientes = require('../models/Pacientes');
const pacientesController = {
    listarPacientes: async (req, res) => {
        const listarPacientes = await Pacientes.findAll();
        res.json(listarPacientes);
    },
    listarPaciente: async (req, res) => {
        const { id } = req.params;
        const paciente = await Pacientes.findByPk(id);
        if (paciente == null) {
            return res.status(404).json("Id não encontrado");
        };
        res.json(paciente);

    },
    atualizarPaciente: async (req, res) => {
        const { id } = req.params;
        const { nome, email, idade } = req.body;
        const pacienteAtualizado = await Pacientes.update({ nome, email, idade }, {
            where: {
                id
            }
        });

        res.json("Paciente atualizado com sucesso!");
    },
    deletarPaciente: async (req, res) => {
        const { id } = req.params; 

        await Pacientes.destroy({
            where: {
                id
            }
        });

        res.json(`Paciente id ${id} deletado com sucesso!`);

    },

    async criarPaciente(req, res) {
        const { nome, email, idade } = req.body;
        const novoPaciente = await Pacientes.create({ nome, email, idade });
        res.json(novoPaciente);
    },

}

module.exports = pacientesController;