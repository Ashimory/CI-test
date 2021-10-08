// Prints help message to the console
// Returns a string
function adjacentElementsProduct(inputArray) {
    let res = Number.NEGATIVE_INFINITY;
    for(i = 0; i < inputArray.length - 1; i++) {
        res = Math.max(res,inputArray[i] * inputArray[i + 1]);
    }
    return res;
}

// test case
console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));