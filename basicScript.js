function TrueFalse(input) {
    console.log(input + ": " + !!input);
    return input + ": " + !!input;
}

function HelloWorld() {
    console.log("Hello world!");
    return "Hello World!";
}

function HelloWorldFancy() {
    console.log('%c Hello World! ', 'background-color: black; color: green;');
    return;
}

function print(context) {
    let appDiv = document.getElementById('app');
    let div = document.createElement('div');
    div.innerHTML = context;
    appDiv.appendChild(div)
}

function changeColor(element){
    if (element.style.color != "blue") {
        element.style.color = "blue";
    } else {
        element.style.color = "green";
    }
    return;
}

function counter(element){
    element.innerHTML = parseInt(element.innerHTML) + 1;
    return;
}

