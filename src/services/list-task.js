
import * as jsonUtils from "../utils/json-utils.js";

function listTask(tipo = "todos"){

    const json = jsonUtils.lerJson();

    if (tipo === "concluidas") {
        for (let i = 0 ; i < json.length ; i++){
            if (tipo === json[i].status) {
                console.log(json[i])
            }
        }
    }
    if (tipo === "afazer") {
            for (let i = 0 ; i < json.length ; i++){
                if ("a fazer" === json[i].status) {
                    console.log(json[i])
            }
        }
    }
    if (tipo === "em-andamento") {
            for (let i = 0 ; i < json.length ; i++){
                if ("em andamento" === json[i].status) {
                console.log(json[i])
            }
        }

    }
    if (tipo === "todos") {
            for (let i = 0 ; i < json.length ; i++){
                console.log(json[i])
            }
    }
};

export {listTask};
