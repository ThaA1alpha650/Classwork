< !DOCTYPE html >
    <
    html lang = "en" >
    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > Document < /title> <
    /head> <
    body >
    <
    script >
    // Write code to print all even numbers from 0 to `num` (and including `num`)
    // Assume `num` will be a positive number
    // Hint: Look up the `%` operator
    // Hint: what was the i++ doing in the for loop. 
    // What was it a shortcut for?
    function logEvenNums(num) {
        //write code here
        for (let i = 0; i <= num; i++) {
            if (i % 2 === 0) {
                console.log(i)
            }
        }
    };
logEvenNums(10) <
    /script> <
    /body> <
    /html>