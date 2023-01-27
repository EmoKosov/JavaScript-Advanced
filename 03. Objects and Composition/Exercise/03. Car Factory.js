function solve(object) {
    const result = {
        model: object.model,
        engine: getEngine(),
        carriage: getCarriage(),
        wheels: getWheels()

    }
    function getEngine() {
        let engine = {};
        if (object.power <= 90) {
            engine.power = 90;
            engine.volume = 1800;
        }
        else if (object.power > 90 && object.power < 200) 
        {
            engine.power = 120;
            engine.volume = 2400;
        }
        else {
            engine.power = 200;
            engine.volume = 3500;
        }
        return engine;
    }

    function getCarriage()
    {
        let carriage = {
            type: object.carriage,
            color: object.color
        }
        return carriage;
    }

    function getWheels()
    {
        let wheels = [];
        for (let i = 0; i < 4; i++) {
            if (object.wheelsize % 2 == 0) {
                wheels.push(object.wheelsize - 1);
            }
            else {
                wheels.push(object.wheelsize);
            }
        }
        return wheels;
    }
    return result;
}


console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));