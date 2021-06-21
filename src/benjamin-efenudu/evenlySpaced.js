// // METHOD 1

// function evenlySpaced(first, second, last) {
//   //Provide your solution here

//   let x = first;
//   let y = second;
//   let z = last;

//   if (x > y && x > z && y > z) {
//     return x - y == y - z;
//   } else if (x > y && x > z && z > y) {
//     return x - z == z - y;
//   } else if (y > x && y > z && x > z) {
//     return y - x == x - z;
//   } else if (y > x && y > z && z && x) {
//     return y - z == z - x;
//   } else if (z > x && z > y && x > y) {
//     return z - x == x - y;
//   } else {
//     return z - y == y - x;
//   }
// }

// // METHOD 2
function evenlySpaced(first, second, last) {
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

module.exports = evenlySpaced;

// console.log(evenlySpaced(2, 4, 6));
