function solve(input) {
    let object = {};
    for (const line of input) {
        let [productName, productPrice] = line.split(" : ");
        if (!object.hasOwnProperty(productName[0])) {
            object[productName[0]] = [];
        }
        object[productName[0]].push([productName, productPrice]);
    }

    let entries = Object.entries(object).sort((a,b) => a[0].localeCompare(b[0]));

    for (const entry of entries) {
        console.log(entry[0]);
        for (const items of entry[1].sort((a,b) => a[0].localeCompare(b[0]))) {
            console.log(`  ${items.join(': ')}`);
        }
    }
    
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])