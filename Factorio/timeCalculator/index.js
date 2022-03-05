function printNames(json) {
    var recipeList = require(json).recipes;
    for (let i = 0; i < recipeList.length; i++) {
        print(recipeList[i].name);
    }
    return;
}

function print(context) {
    let appDiv = document.getElementById('app');
    let div = document.createElement('div');
    div.innerHTML = context;
    appDiv.appendChild(div)
}