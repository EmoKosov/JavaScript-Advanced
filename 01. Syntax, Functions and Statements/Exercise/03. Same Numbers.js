function solve(numbers)
{
    let isSame = true;
    let numAsString = numbers.toString();
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i])
    }


    for (let i = 0; i < numAsString.length - 1; i++) {

        if (numAsString[i] !== numAsString[i + 1]) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

solve(1234)