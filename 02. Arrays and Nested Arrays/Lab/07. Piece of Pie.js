function solve(arr, firstTarget, secondTarget)
{
    let firstIndex = arr.indexOf(firstTarget);
    let secondIndex = arr.indexOf(secondTarget);

    return arr.slice(firstIndex, secondIndex + 1);
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));