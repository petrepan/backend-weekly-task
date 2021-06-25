
function evenlySpaced(a, b, c) {
    //Provide your solution here
    if ((a-b === b-c) || (a-c === c-b) || (a-b ===c-a)){
        return true

    }else {
        return false
    }
    
}

evenlySpaced(2,4,6) // -> should return true
evenlySpaced(3,6,12) // -> should return false

module.exports = evenlySpaced;