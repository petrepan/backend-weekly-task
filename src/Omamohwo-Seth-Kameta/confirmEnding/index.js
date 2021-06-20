function confirmEnding(str, target) {
    
    if (str.substr(-target.length)=== target) {
        return true ;
    }
        return false;
    
  
}

alert(confirmEnding("Bastian", "n")) // => true
alert(confirmEnding("Congratulation", "on")) // => true
alert(confirmEnding("Connor", "n")) //=> false

