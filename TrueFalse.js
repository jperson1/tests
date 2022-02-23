// Run with node or in browser with index.html
// Prints true/false to console depending on input

function truthy(input){
    console.log(input + ": " + !! input);
};

truthy(23);
truthy(0);
truthy("yeet");
truthy(null);