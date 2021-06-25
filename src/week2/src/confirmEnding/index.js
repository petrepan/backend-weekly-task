function confirmEnding(str, target) {
    
    let endingwithTarget = str.endsWith(target)
    return endingwithTarget;
  
}

console.log(confirmEnding("Bastian", "n")); // => true
console.log(confirmEnding("Congratulation", "on")); // => true
console.log(confirmEnding("Hefty", "o"));