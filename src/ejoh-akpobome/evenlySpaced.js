
function evenlySpaced(first, second, last) {
    //Provide your solution here
    
    if ((first - Second === second - third) ||
     (first - third === third - second) || 
     (first - second === third - first)) {
        return true;
    } else {
        return false;
    }
}
      


evenlySpaced(2,4,6) // -> should return true
evenlySpaced(3,6,12) // -> should return false

module.exports = evenlySpaced;