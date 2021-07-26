function allLongestStrings(inputArray) {
    let outputArray = [];
    let longest = 0;
    for (var input in inputArray){
        if (inputArray[input].length >= longest) {
            if (inputArray[input].length > longest) {
                outputArray = [];
                longest = inputArray[input].length;
            }
            outputArray.push(inputArray[input]);
        }
    }
    return outputArray;
}
// test case

// console.log(allLongestStrings(["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]));