
import { readFileSync, writeFileSync,existsSync, mkdirSync, statSync } from "node:fs";

function lerJson(){
    
    if (!existsSync("data")) {
        mkdirSync("data");
    }
    
    if (!existsSync("data/task.json")){
        
        const json = [];
        
        writeFileSync("data/task.json", JSON.stringify(json, null, 2) ,"utf-8"); 
        
    }

    if (statSync('data/task.json').size === 0){
        
        const json = [];

        writeFileSync("data/task.json", JSON.stringify(json, null, 2) ,"utf-8"); 
    
    }

    return JSON.parse(readFileSync("data/task.json","utf-8"));
    
};

function salvarJson(json){
    
    writeFileSync("data/task.json", JSON.stringify(json, null, 2) ,"utf-8"); 
    
};

export {
    lerJson,
    salvarJson
};
