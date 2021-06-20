
function evenlySpaced(first, second, last) {
    //Provide your solution here
    //Declare an array to contain the three values
    let arrOfThree = [];
    arrOfThree.push(first, second, last)
    //Sort the array in ascendind order to have small, medium, and large.
    let sorted = arrOfThree.sort((a, b) => a - b)
    //check if evenly spaced
    if(Math.abs(sorted[0] - sorted[1]) === Math.abs(sorted[1] -sorted[2])){
        return true;
    }else{
        return false;
    }
    
}

evenlySpaced(2,4,6) // -> should return true
evenlySpaced(3,6,12) // -> should return false

module.exports = evenlySpaced;