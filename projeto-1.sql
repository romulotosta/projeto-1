-- CRIAÇÃO DA TABELA
CREATE TABLE tarefas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    concluida BOOLEAN NOT NULL DEFAULT FALSE
);

-- INSERÇÃO DOS DADOS
INSERT INTO tarefas (titulo, descricao, concluida)
VALUES ('Estudar PostgreSQL', 'Aprender SELECT', FALSE);

INSERT INTO tarefas (titulo, descricao, concluida)
VALUES ('Estudar NODE.JS', 'Aprender ARRAY', FALSE);

INSERT INTO tarefas (titulo, descricao, concluida)
VALUES ('Estudar REACT', 'Aprender WEB', TRUE);

-- CONSULTA
SELECT *
FROM tarefas
WHERE titulo = 'Estudar NODE.JS';

-- ATLERAR DADOS
UPDATE tarefas
SET concluida = true
WHERE id = 2;

-- DELETAR DADOS
DELETE FROM tarefas
WHERE id > 4;