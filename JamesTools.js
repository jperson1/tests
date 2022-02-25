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
    return ('%c Hello World!');
}

function print(context) {
    let appDiv = document.getElementById('app');
    let div = document.createElement('div');
    div.innerHTML = context;
    appDiv.appendChild(div)
}

print(TrueFalse("yeet"));
print(HelloWorld());
print(HelloWorldFancy());