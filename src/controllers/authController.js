const { Psicologos } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../configs/secret');

const AuthController = {
    async login(req, res) {
        const { email, senha } = req.body;

        const psicologo = await Psicologos.findOne({ where: { email } });
        if (!psicologo) {
            return res.status(404).json("Email não encontrado");
        }

        if (!bcrypt.compareSync(senha, psicologo.senha)) {
            return res.status(401).json("Senha incorreta");
        }

        const token = jwt.sign(
            {
                id: psicologo.id,
                email: psicologo.email,
                nome: psicologo.nome,
            },
            secret.key);
        res.json(token);
    }
}

module.exports = AuthController;