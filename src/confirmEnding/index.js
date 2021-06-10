// METHOD 1 - Using the .String.prototype.substring()
function confirmEnding(str, target) {
  if (str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}

// METHOD 2 - Using the ternary operator
function confirmEnding(str, target) {
  return str.substr(-target.length) === target ? true : false;
}

// METHOD 3 - Using the .endsWith() built-in function
function confirmEnding(str, target) {
  return str.endsWith(target);
}

alert(confirmEnding("Bastian", "n")); // => true
alert(confirmEnding("Congratulation", "on")); // => true
alert(confirmEnding("Connor", "n")); // => false
