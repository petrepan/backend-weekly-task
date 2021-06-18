// METHOD 1 - Using .substring()
function truncateString(str, num) {
 if (str.length > num) {
     let subStr = str.substring(0, num);
     return subStr + "..."
 } else {
     return str;
 }
}

// METHOD 2 - Using .slice()
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

// METHOD 3 - .slice() shortened with Ternary Operator
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString("A-", 1) // => A....
truncateString("Absolutely Longer", 2) // => Ab....
truncateString("A-tisket a-tasket A green and yellow basket", 8) // => A-tisket...

alert(truncateString("A-", 1)) // => A....
alert(truncateString("Absolutely Longer", 2)) // => Ab....
alert(truncateString("A-tisket a-tasket A green and yellow basket", 8)) // => A-tisket...