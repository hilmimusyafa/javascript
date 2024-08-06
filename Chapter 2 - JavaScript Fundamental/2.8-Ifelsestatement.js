// Basic form
let competitive = false;

console.log("Are you playing competitive game?")
if (competitive == true) {
    console.log("Use Mice for peformance");
} else {
    console.log("Use Controller, you can chill while play")
}

// With operators
let x = 50;

if (x > 70) {
    console.log(x);
} else {
    console.log("Not approve");
}

// Else if

let time2 = "Morning";
let greeting;

if(time2 === "Morning") {
    greeting = "Good Morning! Caelus, How's your sleep?";
} else if(time2 === "Noon") {
    greeting = "Good Afternoon! Caelus, what are you doing?"
} else if(time2 === "Night") {
    greeting = "Night! Caelus, have a nice dream"
}

console.log(greeting);

// Logical operator

let toCharacter = "March7th";
let time3 = "Morning";
let greeting2;

if(toCharacter === "March7th" && time3 == "Morning") {
    greeting2 = "Morning! I'm sleep well, How about you?";
} else if(toCharacter === "March7th" && time3 == "Noon") {
    greeting2 = "Hey! I want to do some adventure today"
} else if(toCharacter === "March7th" && time3 == "Night") {
    greeting2 = "Good Night, March7th! You too"
} else {
    greeting2 = undefined
}

console.log(greeting2);