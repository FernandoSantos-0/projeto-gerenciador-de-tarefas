import { readFileSync, writeFileSync,existsSync, mkdirSync } from "node:fs";
import { argv } from "node:process";

const funcionalidade = process.argv[1]
const argumento1 = process.argv[2]
const argumento2 = process.argv[3]
const argumento3 = process.argv[4]


function lerJsonETransformaEmObjeto(){

    if (!existsSync("./data")) {
        mkdirSync("./data");
    }

    if (!existsSync("./data/task.json")){

        const json = [];

        writeFileSync("./data/task.json", JSON.stringify(json, null, 2) ,"utf-8"); 

    }

    return JSON.parse(readFileSync("./data/task.json","utf-8"));
    
}

function transfomarEmStringECriarArquivoJson(objeto){

    writeFileSync("./data/task.json", JSON.stringify(objeto, null, 2) ,"utf-8"); 
    
}

function adicionarTask(tarefa){

    let json = lerJsonETransformaEmObjeto();

    json.push(new Task(tarefa));

    transfomarEmStringECriarArquivoJson(json);

}

function removerTask(posicao){

    let json = lerJsonETransformaEmObjeto();

    json.splice(posicao,1);

    transfomarEmStringECriarArquivoJson(json);

}

function atualizarTask(){}

function listarTask(){}

class Task {
    constructor(task){
        this.task = task;
        this.status = "em andamento";
        this.date = Task.formatDate();
    }
    static formatDate() {
        const agora = new Date();
        const dia = String(agora.getDate()).padStart(2, "0");
        const mes = String(agora.getMonth() + 1).padStart(2, "0");
        const ano = agora.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
}
