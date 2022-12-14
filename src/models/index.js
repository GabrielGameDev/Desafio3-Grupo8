const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");


Pacientes.belongsToMany(Psicologos, {
    foreignKey: "pacientes_id",
    through: Atendimentos,
});

Psicologos.belongsToMany(Pacientes, {
    foreignKey: "psicologos_id",
    through: Atendimentos,
});


module.exports = {
    Atendimentos,
    Pacientes,
    Psicologos
}