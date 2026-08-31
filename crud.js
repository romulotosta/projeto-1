const express = require("express");
const client = require("./database");

// Importamos as DUAS funções do arquivo tarefas.js
const { listarTarefas, criarTarefa, concluirTarefa } = require("./tarefas/tarefas");

const app = express();

app.use(express.json());

client.connect()
  .then(() => console.log("Conectado ao PostgreSQL com sucesso!"))
  .catch((erro) => console.log("Erro ao conectar no banco:", erro));

// Rota GET (que você já tinha testado)
app.get("/tarefas", (req, res) => {
  listarTarefas()
    .then((resultado) => res.json(resultado.rows))
    .catch((erro) => res.status(500).json({ erro: erro.message }));
});

// Rota POST (NOVA rota para cadastrar)
app.post("/tarefas", (req, res) => {
  const { titulo, descricao } = req.body;

  criarTarefa(titulo, descricao)
    .then((resultado) => res.status(201).json(resultado.rows[0]))
    .catch((erro) => res.status(500).json({ erro: erro.message }));
});

app.patch("/tarefas/:id/concluir", (req, res) => {
  // Pega o ID que veio na URL (ex: /tarefas/8/concluir)
  const { id } = req.params;

  concluirTarefa(id)
    .then((resultado) => {
      // Se não encontrou nenhuma tarefa com esse ID no banco
      if (resultado.rows.length === 0) {
        return res.status(404).json({ erro: "Tarefa não encontrada." });
      }
      res.json(resultado.rows[0]);
    })
    .catch((erro) => res.status(500).json({ erro: erro.message }));
});


app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});