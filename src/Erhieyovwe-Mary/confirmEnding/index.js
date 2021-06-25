function confirmEnding(str, target) {
    if (str.endsWith(target)){

        return true;
     }
    else {

        return false;

    }
    
   }

alert(confirmEnding("Bastian", "n")) // => true
alert(confirmEnding("Congratulation", "on")) // => true
