let json = require('./test.json');

for (let i=0; i<json.recipes.length; i++){
    console.log(json.recipes[i].name);
}