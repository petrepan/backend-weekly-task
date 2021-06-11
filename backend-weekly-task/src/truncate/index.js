function truncateString(str, num) {
 newString = str.length<=num? str:str.substring(0,num)+'...'
 return newString
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)) // => A-tisket...
console.log(truncateString("Absolutely Longer", 2)) // => Ab....
