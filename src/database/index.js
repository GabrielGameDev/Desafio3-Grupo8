const sequelize = require("sequelize")

const DB_NAME = "desafio3"
const DB_USER = "root"
const DB_PASSWORD = "root"
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306
}

const db = new sequelize(DB_NAME, DB_USER, DB_PASSWORD, DB_CONFIG)

async function hasConnection() {
    try {
        await db.authenticate()
        console.log("Conectado com o banco de dados")
    } catch (error) {
        console.error("Não foi possível conexão com o banco:", error)
    }
}

Object.assign(db, {
    hasConnection
    })

module.exports = db