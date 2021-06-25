function confirmEnding(str, target) {
  if (str.endsWith(target)) {
      alert("true");
  }else { alert("false")}
}

confirmEnding("Bastian", "n") // => true
confirmEnding("Congratulation", "on") // => true
