function confirmEnding(str, target) {
  // Get the length of target
  let len = target.length;
  // Get the end of str
  let ending = str.slice(str.length-len)
  //Check if the ending of str is equal to target, and return true
  if(ending === target){
      return true
  }else{
      return false;
  }
}

confirmEnding("Bastian", "n") // => true
confirmEnding("Congratulation", "on") // => true
confirmEnding("Connor", "n") // => false
