function alternatingSums(a) {
    let output = [0, 0]
    for (var i in a) {
        output[i % 2] += a[i];
    }
    return output;
}
// test case

// console.log(alternatingSums([60, 40, 55, 75, 64]));
