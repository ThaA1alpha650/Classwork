// console.log(document.body.children[0])

let pElement = document.getElementById("changeMe");

let aDirect = document.getElementById("directMe");

let aDirect2 = document.querySelector("#directMe");

allH1.setAttribute("class", "betterHeading")

aDirect2.setAttribute("href", "https://www.google.com")

console.log(allH1)

for (let i = 0; i < allH1.length; i++) {
    const element = allH1[i];
    console.log(element)
    element.setAttribute("class", "betterHeading")
}

pElement.setAttribute("class", "redText");

let arr = ["Luc", "Jean", "Foglizzo"];
var arr1 = arr.toLowerCase(0, 1, 2);
for (let i = 0; i < arr.length, i++) {
    arr1[i] += "!"
}