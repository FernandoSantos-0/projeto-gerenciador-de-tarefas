import { argv } from "node:process";
import { addTask } from "./services/add-task.js";
import { listTask } from "./services/list-task.js";
import { lerJson } from "./utils/json-utils.js";
import { removeTask } from "./services/remove-task.js";
import { updateTaskContent,updateTaskProgess } from "./services/update-task.js";


const funcionalidade = process.argv[2];
const argumento1 = process.argv[3];
const argumento2 = process.argv[4];
const argumento3 = process.argv[5];

switch (funcionalidade) {
    case "add":
        addTask(argumento1);
        break;

    case "delete":
        removeTask(argumento1);
        break;

    case "update":
        updateTaskContent(argumento1, argumento2);
        break;

    case "concluir":
    case "em-andamento":
        updateTaskProgess(funcionalidade, argumento1);
        break;

    case "list":
        listTask(argumento1);
        break;

    default:
        console.log("Comando inválido.");
}
