var count = 0;

var incrementElement = document.querySelector("#increment");
var decrementElement = document.querySelector("#decrement");
var countElement = document.querySelector("#count");

function setCounterText() {
    countElement.textContent = count;
}

incrementElement.addEventListener("click", function() {
    count++;
    setCounterText();
});

decrementElement.addEventListener("click", function() {
    if (count > 0) {
        count--;
        setCounterText();
    }
});