function solve(arr) {
    const towns = {};
    for (const line of arr) {
        const [name, population] = line.split(' <-> ');
        if (towns.hasOwnProperty(name)) {
            towns[name] += Number(population);
        } else {
            towns[name] = Number(population);
        }
    }
    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}