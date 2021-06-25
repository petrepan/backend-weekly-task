
function evenlySpaced(first, second, last) {
    //Provide your solution here
    let arrOfThree = [];
    arrOfThree.push(first, second, last)
    let sorted = arrOfThree.sort((a, b)=> a - b)
    if(Math.abs(sorted[0] - sorted[1]) === Math.abs(sorted[1] -sorted[2])){
        return true
    }else {
        return false
    }
    
}

evenlySpaced(2,4,6) // -> should return true
evenlySpaced(3,6,12) // -> should return false

module.exports = evenlySpaced;