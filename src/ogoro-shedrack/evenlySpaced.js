
function evenlySpaced(first, second, last) {
    //Provide your solution here
    let array = [first, second, last];
  array.sort(function (a, b) {
    return a - b;
  });

  let smallest = array[0];
  let middle = array[1];
  let largest = array[2];

  let avg = (largest + smallest) / 2;
  return avg == middle;
}

evenlySpaced(2,4,6) // -> should return true
evenlySpaced(3,6,12) // -> should return false

module.exports = evenlySpaced;
console.log(evenlySpaced(2, 4, 6));
