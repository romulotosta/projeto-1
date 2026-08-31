const {Client} = require("pg");

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "gerenciador_tarefas",
    password: "r2d2c3po",
    port: 5432
});

module.exports = client;
