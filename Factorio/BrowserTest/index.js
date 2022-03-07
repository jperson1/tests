import {recipeList} from "./core.json"

function printNames(json) {
    var recipeList = json.recipes;
    for (let i = 0; i < recipeList.length; i++) {
        printStuff(recipeList[i].name);
    }
    return;
}

function printStuff(context) {
    let appDiv = document.getElementById('app');
    let div = document.createElement('div');
    div.innerHTML = context;
    appDiv.appendChild(div)
}

printStuff("heblo");
json = require('./core.json')
printNames(json);