
import * as jsonUtils from "../utils/json-utils.js";

function updateTaskContent(posicaoTask,novoConteudoTask){
    
    const json = jsonUtils.lerJson();

    json[posicaoTask].task = novoConteudoTask;
    json[posicaoTask].dateUpdate = new Date();

    jsonUtils.salvarJson(json);

};

function updateTaskProgess(tipo,posicaoTask){
    
    const json = jsonUtils.lerJson();
    
    if (tipo === "concluir") {

        json[posicaoTask].status = "concluidas";
    
        json[posicaoTask].dateUpdate = new Date();

    }

    if (tipo === "em andamento") {

        json[posicaoTask].status = "em andamento";
    
        json[posicaoTask].dateUpdate = new Date();

    }

    jsonUtils.salvarJson(json);

}

export {
    updateTaskContent,
    updateTaskProgess
};
