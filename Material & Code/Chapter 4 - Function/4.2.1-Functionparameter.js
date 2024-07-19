// Function parameters

function multiply(a, b) {
    return a * b;
}

// Function Expressions

multiply(3, 4);

// Full example 

const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);
