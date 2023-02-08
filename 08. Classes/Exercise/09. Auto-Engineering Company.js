function solve(input)
{
    let cars = {};
    for (const line of input) {
        let[carBrand, carModel, producedCars] = line.split(' | ')
        if (!cars.hasOwnProperty(carBrand)) cars[carBrand] = new Map();
        if (!cars[carBrand].has(carModel)) cars[carBrand].set(carModel, producedCars)
        else cars[carBrand].set(carModel, cars[carBrand].get(carModel) + producedCars)
    }
    for (const key in cars) {
        console.log(key);
        for (const models of cars[key]) {
            console.log('###' + models.join(' -> '));
        }
    }

}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)