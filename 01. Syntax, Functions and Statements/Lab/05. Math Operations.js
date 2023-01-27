function calculator(x, y, sign) {
    let result;
    switch (sign) {
        case "+": result = x + y; break;
        case "-": result = x - y; break;
        case "*": result = x * y; break;
        case "/": result = x / y; break;
        case "%": result = x % y; break;
        case "**": result = x ** y; break;
    }

    console.log(result);
}