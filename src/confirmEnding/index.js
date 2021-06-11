function confirmEnding(str, target) {
    let endChecker = str.charAt(str.length - 1)
    if (endChecker === target ) {
        return true;
    } else {
        return false;
    }
}

confirmEnding("Bastian", "n") // => true
confirmEnding("Congratulation", "on") // => true
