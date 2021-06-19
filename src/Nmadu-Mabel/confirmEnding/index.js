function confirmEnding(str, target) {
    if (str.substr(-target.length) == target) {
     alert("true")
    
 }  
 else {
     alert("false")
}
}

confirmEnding("Bastian", "n")// => true
confirmEnding("Congratulation", "on") //=> true
confirmEnding("Connor", "n")// => false
