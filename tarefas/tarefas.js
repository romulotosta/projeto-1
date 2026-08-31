const client = require("../database");

// Função 1: que já existia
function listarTarefas() {
  return client.query("SELECT * FROM tarefas ORDER BY id ASC");
}

// Função 2: NOVA função para inserir no banco
function criarTarefa(titulo, descricao) {
  return client.query(
    "INSERT INTO tarefas (titulo, descricao, concluida) VALUES ($1, $2, FALSE) RETURNING *",
    [titulo, descricao]
  );
}

// Acrescente esta função no tarefas.js
function concluirTarefa(id) {
  return client.query(
    "UPDATE tarefas SET concluida = TRUE WHERE id = $1 RETURNING *",
    [id]
  );
}

// Atualize o export incluindo a nova função:
module.exports = {
  listarTarefas,
  criarTarefa,
  concluirTarefa
};