// Answer code
function scoreChecker(score) {
    let result;
    
    if(score >= 90) {
        result = 'Congratulations! You got an A.';
    } else if(score <= 89 && score >= 80) {
        result = 'You got a B.';
    } else if(score <= 79 && score >= 70) {
        result = 'You got a C.';
    } else if(score <= 69 && score >= 60) {
        result = 'You got a D.';
    } else {
        result = 'You got a E.';
    }
    
    return result;
}

module.exports = scoreChecker;

// Sandbox

