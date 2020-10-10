let arr = [];

arr[0] = "hi class";
arr[1] = "good class";

//adds to last in array
arr.push("third item");
// add to beginning of array... with magic
arr.unshift("1st item");

// pop also returns the last item
let lastItem = arr.pop();
// pop removes the last item
arr.pop();

// removes the first item and shifts
arr.shift();