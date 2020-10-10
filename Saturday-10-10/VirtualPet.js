let virtualPet = {
    hungry: false,
    grumpy: false,
    bored: true,
    play: function() {
        this.bored = false;
        this.hungry = true;
        this.grumpy = true;
    },
    feed: function() {
        this.hungry = false;
    },
    takeNap: function() {
        this.grumpy = false;
    },
};
let example = {
    message: "hello",
    sayHi: function() {
        console.log(this.message);
    },
};

function hello() {
    console.log("hi");
}
console.log(virtualPet);
virtualPet.play();
console.log(virtualPet);
virtualPet.feed();
console.log(virtualPet);
virtualPet.takeNap();
var thing1 = 1;
var thing2 = 1;
var thing3 = 1;
var thing4 = 1;
var thing5 = 1;
var thing6 = 1;
var thing7 = 1;
var thing8 = 1;
var thing9 = 1;
var thing10 = 1;
var thing11 = 1;
console.log(thing1 + " " + thing2 + " " + thing3 + " ");
console.log(`${thing1} ${thing2} ${thing3}`);