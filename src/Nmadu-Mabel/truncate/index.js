function truncateString(str, num) {
 if (num <= str.length){
     return str.slice(0, num) + "..."
 } 
     return str
 }


 alert(truncateString("A-tisket a-tasket A green and yellow basket", 8)) // => A-tisket...
 alert(truncateString("Absolutely Longer", 2)) // => Ab....
 alert(truncateString("A-", 1)) //=> A....
