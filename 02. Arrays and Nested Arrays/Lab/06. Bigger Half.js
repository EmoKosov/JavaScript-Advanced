function solve(arr)
{
    let sorted = arr.map((x) => Number(x)).sort((a, b) => a - b);
    
    let divider = Math.floor(arr.length / 2)
    
    return sorted.slice(divider);
}

console.log(solve([4, 7, 2, 5]));