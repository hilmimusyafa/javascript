// Basic Explanation

const visitsCountMap = new Map(); // Save a list of users

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); // Add user "Jonas"

jonas = null; // Data object "Jonas" is deleted

// delay is needed to wait for the garbage collector to work
setTimeout(function() {
    console.log(visitCountMap);
}, 10000)

// More example

const { inspect2 } = require('util');

const visitsCountMap2 = new WeakMap(); // Save a list of users

function countUser(user) {
    let count2 = visitsCountMap2.get(user) || 0;
    visitsCountMap2.set(user, count2 + 1);
}

let jonas2 = { name: "Jonas" };
countUser(jonas2); // Add user "Jonas"

jonas2 = null; // Data object "Jonas" is deleted

// delay is needed to wait for the garbage collector to work
setTimeout(function() {
    console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);