function solve(arr, desc)
{
    if (desc === "asc") {
        return arr.sort((a, b) => a - b);
    }
    else {
        return arr.sort((a, b) => b -a );
    }
}