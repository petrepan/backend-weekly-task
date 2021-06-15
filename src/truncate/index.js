function truncateString(str, num) {
 if (num <= str.length) {
    return str.slice(0,num) + "..."
 }
 return str;
 }
 
truncateString("A-", 1) // => A....
truncateString("A-tisket a-tasket A green and yellow basket", 8) // => A-tisket...
truncateString("Absolutely Longer", 2) // => Ab....

alert(truncateString("A-", 1))
alert(truncateString("A-tisket a-tasket A green and yellow basket", 8))
alert(truncateString("Absolutely Longer", 2))