
//function evenlySpaced(first, second, last) {
    //Provide your solution here
    function evenlySpaced(f, s, l) {
        if (s - f == l - s || f- s == s - l || l - f == f - l) {
          return true;
        } else {
          return false;
        }
      }


evenlySpaced(2,4,6) // -> should return true
evenlySpaced(3,6,12) // -> should return false

module.exports = evenlySpaced;

evenlySpaced(2, 4, 6);
evenlySpaced(4, 6, 2);
evenlySpaced(4, 6, 3);
