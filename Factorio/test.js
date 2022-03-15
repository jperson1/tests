function printNames(json) {
    for (let i = 0; i < json.recipes.length; i++) {
        console.log(json.recipes[i].name);
    }
    return;
}

function findRecipe(json, name) {
    for (let i = 0; i < json.recipes.length; i++) {
        if (json.recipes[i].name == name) {
            return json.recipes[i];
        }
    }
    return -1;
}

function printIngredients(recipe) {
    console.log("Ingredient(s):")
    for (var item in recipe.ingredients) {
        console.log(recipe.ingredients[item] + " " + item);
    }
    return;
}

function printProducts(recipe) {
    console.log("Product(s):");
    if (recipe.result_count) {
        console.log(recipe.result_count + " " + recipe.result);
        return;
    }
    console.log("1 " + recipe.result);
    return;
}

function printTime(recipe){
    console.log("Time:");
    if(recipe.energy_required){
        console.log(recipe.energy_required);
        return;
    }
    console.log(0.5);
    return;
}

function printRecipe(recipe) {
    printProducts(recipe);
    printIngredients(recipe);
    printTime(recipe);
    console.log();
    return;
}

var json = require('./recipes/base.json');
// printNames(json);
// printIngredients(json.recipes[0]);
// printProducts(json.recipes[0]);
printRecipe(findRecipe(json, 'accumulator'));
printRecipe(findRecipe(json, 'transport-belt'));