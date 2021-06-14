function confirmEnding(str, target) {
  if (str.substr(str.length - 1) === target.substr(target.length - 1)) {
      return true;
  }
  return false;
}

confirmEnding("Bastian", "n"); // => true
confirmEnding("Congratulation", "on"); // => true
