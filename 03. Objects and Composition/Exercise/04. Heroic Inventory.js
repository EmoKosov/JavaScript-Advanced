function solve(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {

        let args = input[i].split(' / ');
        let heroName = args.shift();
        let heroLevel = args.shift();
        
        let object = {};
        object.name = heroName;
        object.level = Number(heroLevel);
        object.items = [];

        let items = args[0].split(', ')

        for (const item of items) {
            object.items.push(`${item}`);
        }


        result.push(object);

    }
    return JSON.stringify(result);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));