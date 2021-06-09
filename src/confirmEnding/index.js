function confirmEnding(str, target) {
  let len = target.length;
  let ending = str.slice(str.length-len)
  if(ending === target){
      return true
  }else{
      return false;
  }
}

confirmEnding("Bastian", "n") // => true
confirmEnding("Congratulation", "on") // => true
confirmEnding("Connor", "n") // => false
