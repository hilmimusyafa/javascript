// Answer code
function minimal(a, b) {
    let smaller = 0;
    if (a <= b) {
        smaller = a
    } else {
        smaller = b
    }
    return smaller
}

function findIndex(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return i;
        }
    }
    return -1;
}


// Optional code

console.log(minimal(1, 4));
console.log(minimal(3, 2));
console.log(minimal(1, 4));

console.log(findIndex([1, 2, 3, 4, 5], 3));
console.log(findIndex([1, 2, 3, 4, 5], 6));
console.log(findIndex([1, 2, 3, 4, 5], 5));

