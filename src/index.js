import { argv } from "node:process";
import { addTask } from "./services/add-task.js";
import { listTask } from "./services/list-task.js";
import { lerJson } from "./utils/json-utils.js";
import { removeTask } from "./services/remove-task.js";
import { updateTask } from "./services/update-task.js";


const funcionalidade = process.argv[2];
const argumento1 = process.argv[3];
const argumento2 = process.argv[4];
const argumento3 = process.argv[5];

if (funcionalidade === "add")    {

    addTask(argumento1);

}
if (funcionalidade === "delete") {

    removeTask(argumento1);

}
if (funcionalidade === "update") {

    updateTaskContent(argumento1,argumento2);

}
if (funcionalidade === "concluir" || funcionalidade == "em andamento") {

    updateTaskProgess(funcionalidade,argumento1);

}
if (funcionalidade === "list-concluidas" || funcionalidade === "list-afazer" || funcionalidade === "list-andamento") {

    listTask(funcionalidade);

}