// Function with non parameter

function greeting() {
    console.log("Good Morning!")
}

greeting();

// Function with parameter

function greeting(name, language) {
    if(language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}

greeting("Harry", "French");

function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)