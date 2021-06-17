
function evenlySpaced(first, second, last) {
    //Provide your solution here
 
    if(first==second && second==last) return true;
    if(first==second||first==last||second==last) return false;
    return ((Math.abs(first-second)== Math.abs(second-last))||(Math.abs(first-last)==Math.abs(first-second))||(Math.abs(last-first)==Math.abs(second-last)));
 {
     
 }
}

evenlySpaced(2,4,6) // -> should return true
evenlySpaced(3,6,12) // -> should return false

module.exports = evenlySpaced;