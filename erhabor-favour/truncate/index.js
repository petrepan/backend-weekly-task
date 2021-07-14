function truncatestring(str, num) {
    if (num>= str. length) returnstr;
if (num<=2) return str.slice (0, num) + "...";
return str.slice (0, num) + "..."
}
alert (truncatestring("A-",1));
alert (truncatestring  ("Absolutely longer", 2));
alert (truncatestring ("A-tisket a-tasket A green and yellow basket", 8)); // => A-tisket...
