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