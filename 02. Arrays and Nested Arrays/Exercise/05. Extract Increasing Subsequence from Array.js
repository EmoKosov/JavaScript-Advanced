function solve(array)
{
    let result = [];
    let currentMax = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= currentMax) {
            currentMax = array[i];
            result.push(array[i]);
        }
    }
    return result;
}

console.log(solve([1, 3, 8, 4, 10, 10, 12, 3, 2, 24]));