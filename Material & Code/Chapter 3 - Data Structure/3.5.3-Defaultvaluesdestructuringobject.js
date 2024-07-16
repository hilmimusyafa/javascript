// Proof of default values in Destructuring Object

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}


const { firstName, age, isMale } = profile; // isMale isn't same like age

console.log(firstName)
console.log(age)
console.log(isMale)

// You can custom the value if there's no data

const profile2 = {
    firstName2: "John",
    lastName2: "Doe",
    age2: 18
}


const { firstName2, age2, isMale2 = false } = profile2;

console.log(firstName2)
console.log(age2)
console.log(isMale2)