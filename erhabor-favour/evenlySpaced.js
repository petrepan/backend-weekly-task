
function evenlySpaced(first, second, last) {
    //Provide your solution here
    var num;
    num  = (last+first)/2;
    return num == second;
}
// try this  too:
// if (first > second && first > last && second > last){
//     return first - second == second - last;
// }
// return last - second == second - first;


evenlySpaced(2,4,6) // -> should return true
evenlySpaced(3,6,12) // -> should return false

module.exports = evenlySpaced;