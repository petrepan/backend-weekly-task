/*Check if a string (first argument => str) ends with the given target string (second argument => target). 
Return true if the first argument ends 
with the second argument. return false if it doesn't*/

function confirmEnding(str, target) {
  let result = 0;
  for(i = 1; i < target.length + 1; i++) {
   if(str[str.length-1] === target[target.length-1]) {
    result += 1;
   }
  }
  if(result == target.length){
    return true;
  }
  else { 
    return false;
  }
}
alert(confirmEnding("Bastian", "n")) // => true
alert(confirmEnding("Congratulation", "on")) // => true
