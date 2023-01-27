function solve(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumCOne = 0;
        let sumCTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumCOne += matrix[i][j];
            sumCTwo += matrix[i + 1][j];
        }

        if (sumCOne !== sumCTwo) {
            return false;
        }
    }

    return true;
}

log

solve([[4, 7, 9],
    [1, 0, 1],
    [3, 1, 1]]
   )