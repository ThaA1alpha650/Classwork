let arr1 = ["Luc", "J", "Foglizzo"];

let truthy = true;
let falsey = false;

let auth = true;
let password = true;

if (password) {
    if (auth) {
        console.log("You are logged in");
    }
}

// AND operator, both must be true
if (password === true && auth === true) {
    console.log("You are logged in");
}

// OR operator pipes: ||
if (password true || auth true) {
    console.log("You are logged in");
}