truncateString = function (str, length, ending) {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = "....";
    }
    if (str.length > length) {
        return str.substring(0, length) + ending;
    }
    else {
        return str;
    }
};

alert(truncateString("A-tisket a-tasket A green and yellow basket", 8)) // => A-tisket...
alert(truncateString("Absolutely Longer", 2)) // => Ab....

// or using the slice method

function truncateString(str, num) {
    if (str.length <= num) {
        return str
    }

    return str.slice(0, num) + '...'
}

alert(truncateString("A-tisket a-tasket A green and yellow basket", 8)) // => A-tisket...
alert(truncateString("Absolutely Longer", 2)) // => Ab....
