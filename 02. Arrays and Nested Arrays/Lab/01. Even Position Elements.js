function solve(arr)
{
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            result = result + arr[i] + ' ';
        }
    }
    console.log(result);
}

solve([3, 5 ,3, 2])