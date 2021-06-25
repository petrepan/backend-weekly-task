
function evenlySpaced(first, second, last) {
    //Provide your solution here
    // 
    if (first-second === second - last) {
        
            return "true"}
            else 
             {return "false"}
                
          }
    

// alert(evenlySpaced(2,4,6))
// alert(evenlySpaced(3,6,12))
console.log(evenlySpaced(2,4,6)) // -> should return true
console.log(evenlySpaced(3,6,12) // -> should return false

// module.exports = evenlySpaced