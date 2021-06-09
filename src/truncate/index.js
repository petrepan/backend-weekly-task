function truncateString(str, num) {
 let truncated = str.slice(0,num) + "...";
 return str.length > num? truncated: str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8) // => A-tisket...
truncateString("Absolutely Longer", 2) // => Ab....
