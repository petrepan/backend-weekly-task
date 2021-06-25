
function evenlySpaced(first, second, last) {
    //Provide your solution here
    // Putting values in array for ease
    let allValuesArray = [first, second, last];

    // Sorting the array in ascending order
    allValuesArray.sort(function(a,b){return a-b;});


    // Assigning items to variables based on the sorting
    let minNumber = allValuesArray[0];
    let midNumber = allValuesArray[1];
    let maxNumber = allValuesArray[2];


    // For evenly spaced, the median should be the sum of min and max numbers divide by 2
    let median = (maxNumber + minNumber)/2;

    let finalResult;

    if(median == midNumber){
        finalResult =  true;
    }
    else{
        finalResult = false;
    }

    return finalResult;

}


evenlySpaced(2, 4, 6) // -> should return true
evenlySpaced(3, 6, 12) // -> should return false

module.exports = evenlySpaced;
