// 1. Basic Syntax

const profile = {
    firstName: "Bronya",
    lastName: "Rand",
    age: 30
}

const { firstName, lastName, age } = profile;
console.log(firstName, lastName, age);

// 2. Assigning to Diffrent Variables

const profile2 = {
    firstName2: "Bronya",
    lastName2: "Rand",
    age2: 30
}
const { firstName2: personFirstName2, lastName2: personLastName2, age2: personAge2 } = profile2;

console.log(personFirstName2, personLastName2); 
console.log(personAge2);

// 3. Default Values

const profile3 = {
    firstName3: "Bronya",
    lastName3: "Rand",
    age3: 30
}

const { firstName3, lastName3, age3 } = profile3;

console.log(firstName3, lastName3)
console.log(isMale3)

// 4. Nested Object Destructuring

const profile4 = {
    firstName4: "Bronya",
    lastName4: "Rand",
    age4: 30,
    address4: {
    city4: 'Belobog',
    zip4: 10001
    }
}

const { firstName4, lastName4, address4: { city4, zip4 } } = profile4;

console.log(firstName4, lastName4);
console.log(city4);
