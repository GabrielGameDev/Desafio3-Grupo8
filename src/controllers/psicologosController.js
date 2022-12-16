const Psicologo = require('../models/Psicologos');
const bcrypt = require('bcryptjs');

const psicologosController = {
    //listar psicologos, listar um psicologo, atualizar um psicologo, deletar um psicologo e criar um psicologo
    listarPsicologos: async (req, res) => {
        const listaDePsicologos = await Psicologo.findAll();
        res.json(listaDePsicologos);
    },
    listarPsicologo: async (req, res) => {
        const { id } = req.params;
        const psicologo = await Psicologo.findByPk(id, { attributes: { exclude: ['senha'] } });
        if (psicologo == null) {
            return res.status(404).json("Id não encontrado");
        };
        res.json(psicologo);

    },
    atualizarPsicologo: async (req, res) => {
        const { id } = req.params;
        const { nome, email, senha, apresentacao } = req.body;
        const psicologoAtualizado = await Psicologo.update({ nome, email, senha, apresentacao }, {
            where: {
                id
            }
        });

        res.json("Psicologo atualizado com sucesso!");
    },
    deletarPsicologo: async (req, res) => {
        const { id } = req.params;
        await Psicologo.destroy({
            where: {
                id
            }
        });

        return res.status(204).json();



    },

    async criarPsicologo(req, res) {

        const { nome, email, senha, apresentacao } = req.body;

        const emailExiste = await Psicologo.findOne({ where: { email } });

        if (emailExiste) {
            return res.status(400).json("Email já cadastrado");
        }

        const newSenha = bcrypt.hashSync(senha, 10);
        const novoPsicologo = await Psicologo.create({ nome, email, senha: newSenha, apresentacao });

        res.status(201).json(novoPsicologo);
    }

}

module.exports = psicologosController;