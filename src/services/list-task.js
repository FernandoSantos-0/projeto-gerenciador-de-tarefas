
import * as jsonUtils from "../utils/json-utils.js";

function listTask(tipo = "todos"){

    const json = jsonUtils.lerJson();

    tipo.split("-");

    if (tipo[1] === "concluidas") {
        for (let i = 0 ; i < json.length ; i++){
            if (tipo === json[i].status) {
                console.log(json[i])
            }
        }

    }
    if (tipo[1] === "afazer") {
            for (let i = 0 ; i < json.length ; i++){
                if (tipo === json[i].status) {
                    console.log(json[i])
            }
        }

    }
    if (tipo[1] === "em andamento") {
            for (let i = 0 ; i < json.length ; i++){
                if (tipo === json[i].status) {
                console.log(json[i])
            }
        }

    }
    if (tipo[0] === "todos") {
            for (let i = 0 ; i < json.length ; i++){
                console.log(json[i])
            }
    }
};

export {listTask};
