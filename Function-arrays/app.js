let healthy = ["apples", "pear", "lettuce", "appricot"];
let healthyA = [];
for (let i = 0; i < healthy.length; i++) {
    if (healthy[i].charAt(0).toLowerCase() === "a") {
        // healthyA.push(healthy[i])
        healthyA.push(i);
    }
}
console.log(healthyA);

// reusable block of code
function sayHi(name) {
    console.log("hi" + name);
}
sayHi("Sergio");
sayHi();