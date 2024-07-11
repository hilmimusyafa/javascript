// Basic form
let isRaining = false;

console.log("Is it necessary to bring an umbrella?")
if (isRaining == true) {
    console.log("It's raining outside, use the Umbrella");
} else {
    console.log("It's not raining outside, no need to bring an umbrella")
}

// With operators
let x = 50;

if (x > 70) {
    console.log(x);
} else {
    console.log("Score less than 70");
}

// Else if

let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);

// Ternary operator

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

// Logical operator

let language2 = "Japanese";
let time = "Morning";
let greeting2 = "Selamat Pagi"

if(language2 === "English" && time == "Morning") {
    greeting2 = "Good Morning!";
} else if(language2 === "French" && time == "Morning") {
    greeting2 = "Bonjour!"
} else if(language2 === "Japanese" && time == "Morning") {
    greeting2 = "Ohayou Gozaimasu!"
} else {
    greeting2 = "Hola"
}

console.log(greeting2);