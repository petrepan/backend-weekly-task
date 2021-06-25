function confirmEnding(str, target) {
  if (str.substr(-target.length)=== target){
return true;
  } return false;
}

confirmEnding("Bastian", "n") // => true
confirmEnding("Congratulation", "on") // => true
confirmEnding("Connor", "n") //=> false

alert (confirmEnding("Bastian", "n"))
alert (confirmEnding("Congratulation", "on"))
alert (confirmEnding("Connor", "n"))