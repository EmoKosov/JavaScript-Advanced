function solve(input)
{
    let object = {};
    for (let index = 0; index < input.length - 1; index++) {
        if (index % 2 == 0) {
            object[input[index]] = Number(input[index + 1]);
        }
    }
    return object;
}


solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);