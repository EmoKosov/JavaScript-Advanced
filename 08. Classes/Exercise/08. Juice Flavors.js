function solve(input) {
    let bottles = new Map();
    let juice = {};
    for (const line of input) {
        let [juiceName, juiceQuantity] = line.split(' => ')
        if (!juice.hasOwnProperty(juiceName)) juice[juiceName] = 0;

        juice[juiceName] += Number(juiceQuantity);

        while (juice[juiceName] > 999) {
            if (juice[juiceName] >= 1000) {
                if (bottles.has(juiceName)) bottles.set(juiceName, bottles.get(juiceName) + 1);
                else bottles.set(juiceName, 1);
            }
            juice[juiceName] -= 1000;
        }
    }
    for (const bottle of bottles) {
        console.log(bottle.join(' => '));
    }
    
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)