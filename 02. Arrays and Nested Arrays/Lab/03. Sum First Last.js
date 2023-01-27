function solve(arr)
{
    let nums = arr.map((n) => Number(n))
    let sum = nums[0] + nums[nums.length - 1];
    console.log(sum);
}

solve(['10', '20', '40'])