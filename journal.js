// Greet a user by name
function greet(name) {
    return "Hello, " + name + "!";
}

// Writing good day to the console

const speak = function () {
    console.log("good day");
};

speak();

// Greet a user by name and time of day

const personTime = function(name,time) {
    console.log(`good ${time} ${name}`);
};

personTime("mario","morning")

// Squares 5 and multiplies by pi

const calcArea = function (radius) {
    return 3.14 * radius ** 2;
};

const area = calcArea(5);

console.log(area);

// Loops through an array of names and logs each one

const printNames = function(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
};

const names = ["Terry", "Mario", "Luigi"];
printNames(names);