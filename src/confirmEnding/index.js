function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target 
}

alert(confirmEnding("Bastian", "n"));
alert(confirmEnding("Congratulation", "on"));
alert(confirmEnding("Connor", "n"));

// OR MAKING USE OF SLICE 



function confirmEnding(str, target) {
    let ending = str.slice(str.length - target.length)
    return ending === target 
  }

alert(confirmEnding("Bastian", "n"));
alert(confirmEnding("Congratulation", "on"));
alert(confirmEnding("Connor", "n"));