
import * as jsonUtils from "../utils/json-utils.js";
import { Task } from "../models/tarefa.js";

function addTask(conteudoTarefa){
    
    const json = jsonUtils.lerJson();

    const task = new Task(conteudoTarefa);

    json.push(task)

    jsonUtils.salvarJson(json);

};

export {addTask};
