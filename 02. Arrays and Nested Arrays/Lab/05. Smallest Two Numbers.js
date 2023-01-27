function solve(arr)
{
    let nums = arr.map((i) => Number(i)).sort((a,b) => a - b);
    let result = nums.slice(0, 2);
    return result;
}