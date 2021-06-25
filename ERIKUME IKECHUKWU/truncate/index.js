function truncateString(str, num) {
if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

alert (truncateString("A-tisket a-tasket A green and yellow basket", 8)) // => A-tisket...
alert (truncateString("Absolutely Longer", 2)) // => Ab....