function confirmEnding(String, target) {
  return String.endsWith(target)
}
alert(confirmEnding('Bastian', 'n')) // => true
alert(confirmEnding("Congratulation", "on")) // => true

