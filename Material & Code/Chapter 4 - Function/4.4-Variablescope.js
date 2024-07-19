// Direct Example

// global variable, can be accessed in parent() and child()
const a = 'a';

function parent() {
    // local variable, can be accessed in parent() and child(), but cannot be accessed outside the function.
    const b = 'b';

    function child() {
         // local variable, accessible only in the child() function.
        const c = 'c';
    }
}

function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number  = multiply(20);

console.log(total)