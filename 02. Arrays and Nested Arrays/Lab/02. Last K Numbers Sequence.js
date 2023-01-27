function solve(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        
        let start = Math.max(0, i - k);
        let end = i;
        let previousK = result.slice(start, end);

        let sum = previousK.reduce((sum, currentValue) => sum + currentValue, 0);
        
        result.push(sum);
    }
    console.log(result);
}
