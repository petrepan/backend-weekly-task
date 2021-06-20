function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr + "..."
    } else {
        return str;
    }
   }


truncateString("A-tisket a-tasket A green and yellow basket", 8) // => A-tisket...
truncateString("Absolutely Longer", 2) // => Ab....