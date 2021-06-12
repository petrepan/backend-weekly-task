function truncateString(str, num) {
 return str.slice(0, num);
}

alert(truncateString("A-", 1) + "....");
alert(truncateString("Absolutely Longer", 2) + "....");
alert(truncateString("A-tisket a-tasket A green and yellow basket", 8) + "...");
