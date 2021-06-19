function truncateString(str, num) {

    if(str.length > num){
        let newString = str.substr(0,num);
        return newString + "..."
    }
    else{
        return str;
    }

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)) // => A-tisket...
console.log(truncateString("Absolutely Longer", 2)) // => Ab....