
function evenlySpaced(first, second, last) {
    //Provide your solution here
    let average = (last+first)/2
    return average==second

    
}

evenlySpaced(2,4,6) // -> should return true
evenlySpaced(3,6,12) // -> should return false

module.exports = evenlySpaced;