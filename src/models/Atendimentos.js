const { DataTypes } = require("sequelize");
const db = require("../database");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

const Atendimentos = db.define("Atendimentos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_atendimento: {
        type: DataTypes.DATE
    },
    observacao: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
    pacientes_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Pacientes,
            key: "id",
        },
    },
    psicologos_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Psicologos,
            key: "id",
        },
    },
}, {
    tableName: "atendimentos",
});

module.exports = Atendimentos;