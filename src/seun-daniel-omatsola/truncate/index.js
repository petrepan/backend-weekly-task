function truncateString(str, num) {
        if (str.length > num) {
            let words = str.substring(0, num);
            return words ;
        } else {
            return str;
        }
    
}

truncateString("A-tisket a-tasket A green and yellow basket", 8); // => A-tisket...
alert(truncateString("Absolutely Longer", 2)); // => Ab....