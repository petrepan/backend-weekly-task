
function evenlySpaced(first, second, last) {
    //Provide your solution here
    
    if(Math.abs(first -second) === Math.abs(second - last)){
        return true;
    }else{
        return false;
    }
    
}

evenlySpaced(2,4,6) // -> should return true
evenlySpaced(3,6,12) // -> should return false

module.exports = evenlySpaced;