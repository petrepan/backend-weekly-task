//let first = a, second = b , and third = c
function evenlySpaced(a, b, c) {
    //Provide your solution here
    let num
    num = (c + a)/2
    return num == b
    
    
}

console.log(evenlySpaced(2,4,6)) // -> should return true
console.log(evenlySpaced(3,6,12)) // -> should return false

module.exports = evenlySpaced;