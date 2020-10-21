const array = [1, 2, 3, 4, 5];
// for loop
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// while loop
let j = 0;
while (j < array.length) {
    console.log(array[j]);
    j++; // <== remember to increment j or infinite loop
}