function solve(arr)
{   
    let result = [];
    let biggestNums = arr.slice(0).sort((a, b) => b-a);
    let smallestNums = arr.slice(0).sort((a, b) => a-b);
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) result.push(biggestNums.pop());
        else result.push(smallestNums.pop())
    }
    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);