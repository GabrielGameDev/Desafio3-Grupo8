const Psicologo = require('../models/Psicologos');

const psicologos ={
   //listar psicologos, listar um psicologo, atualizar um psicologo, deletar um psicologo e criar um psicologo
    listarPsicologos: async (req, res) => {
        const listaDePsicologos = await Psicologo.findAll();
        res.json(listaDePsicologos);
    },
    listarPsicologo: async (req, res) => {
        const {id } = req.params;
        const psicologo = await Psicologo.findByPk(id);
        res.json(psicologo);
        
    },
    atualizarPsicologo: async (req, res) => {
        const {id } = req.params;
        const {nome, email, senha, apresentacao} = req.body;
        const psicologoAtualizado = await Psicologo.update({nome, email, senha, apresentacao}, {
            where: {
                id
            }
        });

        res.json("Psicologo atualizado com sucesso!");
    },
    deletarPsicologo: async (req, res) => {
        const {id } = req.params;
        
        await Psicologo.destroy({
            where: {
                id
            }
        });

        res.json(`Psicologo id ${id} deletado com sucesso!`);
        
    },
    
    async criarPsicologo(req, res) {
        const {nome, email, senha, apresentacao} = req.body;
        const novoPsicologo = await Psicologo.create({nome, email, senha, apresentacao});
        res.json(novoPsicologo);
    }

}

module.exports = psicologos