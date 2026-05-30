
import * as jsonUtils from "../utils/json-utils.js";

function removeTask(posicaoTask){

    const json = jsonUtils.lerJson();

    json.splice(posicaoTask,1);
    
    jsonUtils.salvarJson(json);
    
};

export {removeTask};
