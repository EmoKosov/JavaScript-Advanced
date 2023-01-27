function solve(numbers, n) {
    for (let i = 0; i < n; i++) {
        numbers.unshift(numbers.pop());
    }
    return numbers.join(' ');
}

console.log(solve(['1', 
'2', 
'3', 
'4'], 
2
));