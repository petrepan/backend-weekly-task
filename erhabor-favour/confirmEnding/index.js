function confirmEnding(str, target) {
        if (str.substr(-target.length)===target){
            return true;
        }else {
            return false;
        }
         }
         alert(confirmEnding("Bastian","n"))
         alert(confirmEnding("Congratulation","on"))
         alert(confirmEnding("Connor","n"))



