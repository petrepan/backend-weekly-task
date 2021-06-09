function truncateString(str, num) {
    //Slice num number of characters from the begining of the str
 let truncated = str.slice(0,num) + "...";
 // Truncate if str is greater than num, else return str as it is
 return str.length > num? truncated: str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8) // => A-tisket...
truncateString("Absolutely Longer", 2) // => Ab....
