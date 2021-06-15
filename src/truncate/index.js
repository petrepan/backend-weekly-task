function truncateString(str, num) {
 let truncStr = str.substr(0, num)+ "..."
 return str.length > num? truncStr: str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8) // => A-tisket...
truncateString("Absolutely Longer", 2) // => Ab....