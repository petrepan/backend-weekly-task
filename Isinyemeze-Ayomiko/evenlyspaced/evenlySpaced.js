
function evenlySpaced(first, second, last) {
    //Provide your solution here
    let avg = (last+first)/2
    return avg==second
}

console.log(evenlySpaced(2,4,6)) // -> should return true
console.log(evenlySpaced(3,6,12)) // -> should return false

module.exports = evenlySpaced;
