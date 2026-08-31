const client = require("./database");

/*
function listarTarefas(){
    return client.query ("SELECT * FROM tarefas");
}

function buscarTarefa(id){
    return client.query ("SELECT * FROM tarefas WHERE id = $1",[id]);
}
*/

function criarTarefa(titulo, descricao){
    return client.query ("INSERT INTO tarefas (titulo, descricao, concluida) VALUES ($1, $2, FALSE) RETURNING *",
        [titulo, descricao]);
}


client.connect()
    .then(() => {
        console.log("Conectado ao PostgreSQL!");
        //return listarTarefas();
        //return buscarTarefa(1);
        return criarTarefa("Estudar Node.js", "Aprender PostgreSQL");
    })
    .then((resultado) => {
        console.log(resultado.rows[0]);
        console.log("Tarefa criada com sucesso!")
    })
    .catch((erro) => {
        console.log("Erro ao conectar:", erro);
    });
/*
const tarefa = [
{
    titulo: "Estudar PostgreSQL",
    descricao: "Aprender SELECT",
    concluida: false
},
{
    titulo: "Estudar NODE.JS",
    descricao: "Aprender ARRAY",
    concluida: false
},
{
    titulo: "Estudar REACT",
    descricao: "Aprender WEB",
    concluida: true
}
];



function criarTarefa (tarefa){
    tarefa.push({
        titulo: "Estudar Python",
        descricao:"Analise de Dados",
        concluida: false})
    }

criarTarefa(tarefa);

function listarTarefas(tarefa){
    for (let i = 0; i < tarefa.length; i++){
        console.log(tarefa[i].titulo);
        console.log(tarefa[i].descricao);
        console.log(tarefa[i].concluida);
    }
} 

listarTarefas(tarefa);


function buscarTarefa(tarefa, titulo){
    const tarefaEncontrada = tarefa.find(function(achaTarefa){
        return achaTarefa.titulo === titulo;        
    })
    return tarefaEncontrada;
}

const resultado = buscarTarefa(tarefa, "Estudar NODE.JS");
console.log(resultado);



function concluirTarefa (tarefa, titulo){
    const tarefaEncontrada = tarefa.find(function(achaTarefa){
        return achaTarefa.titulo === titulo;
    })
    
    if (tarefaEncontrada){
    tarefaEncontrada.concluida = true;
    } else {
        console.log("Tarefa não encontrada");
    }

}

concluirTarefa (tarefa, "Estudar NODE.JS");
console.log(tarefa);



function excluirTarefa(tarefa, titulo){
    const tarefaEncontrada = tarefa.findIndex(function(achaTarefa){
        return achaTarefa.titulo === titulo;
      
   });
   
    if (tarefaEncontrada != -1){
        tarefa.splice(tarefaEncontrada, 1);
        console.log("Tarefa excluída com sucesso");
    } else {
        console.log("Tarefa não encontrada");
    }
}
excluirTarefa (tarefa, "Estudar NODE.JS");
console.log(tarefa);
*/
