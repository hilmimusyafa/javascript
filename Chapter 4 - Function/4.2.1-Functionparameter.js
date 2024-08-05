// Function parameters

function multiply(a, b) {
    return a * b;
}

// Function Expressions

multiply(3, 4);

// Full example 

const user = {
    id: 10129,
    displayName: 'LittleGuiGuinevere',
    fullName: 'Guinaifen',
};

function introduce({displayName, fullName}) {
    console.log(`Username ${displayName} is ${fullName}`);
}

introduce(user);