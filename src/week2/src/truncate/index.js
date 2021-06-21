
function truncateString(str, num) {
    if (str.length > num) {

        let subStr = str.substring(0, num);
        return subStr + "...";
    } else {
        return str;
        
    }
 
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // => A-tisket...
console.log(truncateString("Absolutely Longer", 2)) // => Ab....