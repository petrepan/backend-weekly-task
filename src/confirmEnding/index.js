function confirmEnding (str, target) {
    if (str.substr(-target.length)===target){
  return true;
    } else{
        return false;
    }
  }
  confirmEnding("Bastian", "n") // => true
  confirmEnding("Congratulation", "on") // => true
  confirmEnding("Connor", "n") //=> false
  let newli = "\r\n"
  let result1 = confirmEnding("Bastian", "n")
  result1 += newli
  result1 += confirmEnding("Congratulation", "on")
  result1 += newli
  result1 += confirmEnding("Connor", "n")
  alert(result1);
  