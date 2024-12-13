const max = (matrix) => {
    let max = 0;
    for (let row of matrix) {
        for (let item of row) {
            if (item > max) {
                maxValue = item;
            }
        }
    }
    return maxValue;
}
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);