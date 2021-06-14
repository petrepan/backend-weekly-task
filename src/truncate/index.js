function truncateString(str, num) {
    var substring = "";
 if(num <= 3){
     substring=str.substr(0, num);
 }
 else {
     substring=str.substr(0, num-3);
 }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8) // => A-tisket...
truncateString("Absolutely Longer", 2) // => Ab....