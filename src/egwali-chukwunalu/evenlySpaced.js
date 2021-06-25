
function evenlySpaced(first, second, last) {
    //Provide your solution here
	if(second - first == last - second) {
		return true;
	}
	else {
		return false;
	}
    
}

console.log(evenlySpaced(2,4,6)) // -> should return true
console.log(evenlySpaced(3,6,12)) // -> should return false

module.exports = evenlySpaced;
