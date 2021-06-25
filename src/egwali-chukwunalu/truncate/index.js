/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
The task is to use the second argument (a number) to check against the first argument(a string).
truncate the length of the first argument to the value of the second argument; then add "..." at the ending.
Return the truncated string with a ... ending.
*/


function truncateString(str, num) {
 if(str.length > num){
   let newString = str.substring(0, num)
   return newString + "...";
 }
 else {
   return str;
 }
}

alert(truncateString("A-tisket a-tasket A green and yellow basket", 8)) // => A-tisket...
alert(truncateString("Absolutely Longer", 2)) // => Ab....