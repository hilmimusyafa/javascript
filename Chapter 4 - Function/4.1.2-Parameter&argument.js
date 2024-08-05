// Function with non parameter

function greeting() {
    console.log("Good Morning!")
}

greeting();

// Function with parameter
// String
let user = "caelus";
let targetTalk = "march7th";

function talk(user, targetTalk) {
    if (user == "caelus") {
        if (targetTalk == "march7th") { 
            return "Hey March, do you want to go to the library with me?";
        } else if (targetTalk == "dan heng") {
            return "Do you want to help me in the library?";
        }
    } else if (user == "March7th") {
        if (targetTalk == "caelus") {
            return "Caelus, can you help me please in the library?";
        } else if (targetTalk == "dan heng") {
            return "Dan Heng, help me please";
        }
    }
}

console.log(talk(user, targetTalk));

// Number

function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)