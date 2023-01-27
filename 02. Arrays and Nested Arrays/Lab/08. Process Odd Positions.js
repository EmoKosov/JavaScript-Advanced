function solve(arr)
{
    return arr.filter((element, index, arr) => index % 2 !== 0).map((i) => i *2).reverse().join(' ');
}

console.log(solve([10, 15, 20, 25]));