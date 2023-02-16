class CarDealership {
    constructor(name)
    {
        this.name = name;
        this.avaliableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsePower, price, mileage)
    {
        if (!this.validateModel(model) || !this.validateHorsePower(horsePower) || !this.validatePriceAndMileage(price) || !this.validatePriceAndMileage(mileage)) {
            throw new Error('Invalid input!');
        }
        this.avaliableCars.push({
            model,
            horsePower,
            price,
            mileage
        })

        return `New car added: ${model} - ${horsePower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
    sellCar(model, desiredMileage)
    {
        const index = this.avaliableCars.findIndex(c => c.model == model);
        const match = this.avaliableCars[index];

        if (match == undefined) {
            throw new Error(`${model} was not found!`)
        }

        const mileageDelta = match.mileage - desiredMileage;

        const sold = {
            model: match.model,
            horsePower: match.horsePower
        };

        if (mileageDelta <= 0) {
            sold.soldPrice = match.price;
        }
        else if (mileageDelta <= 40000) {
            sold.soldPrice = match.price * 0.95;
        }
        else {
            sold.soldPrice = match.price * 0.9;
        }

        this.soldCars.push(sold);
        this.avaliableCars.splice(index, 1);
        this.totalIncome += sold.soldPrice;

        return `${model} was sold for ${sold.soldPrice.toFixed(2)}$`;
    }
    currentCar()
    {
        if (this.avaliableCars.length == 0) {
            return `There are no available cars`;
        }

        const result = this.avaliableCars.map(c => `---${c.model} - ${c.horsePower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
        result.unshift(`-Available cars:`);
        return result.join('\n');

    }

    salesReport(criteria)
    {
        if (criteria == `horsepower`) {
            this.soldCars.sort((a, b) => b.horsePower - a.horsePower);
        }
        else if (criteria == 'model')
        {
            this.soldCars.sort((a,b) => a.model.localeCompare(b.model)); 
        }
        else {
            throw new Type('Invalid criteria!');
        }

        const result = this.soldCars.map(c => `---${c.model} - ${c.horsePower} HP - ${c.soldPrice.toFixed(2)}$`);
        result.unshift(`-${this.soldCars.length} cars sold:`);
        result.unshift(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);

        return result.join(`\n`);
    }

    validateModel(value)
    {
        return typeof value == 'string' && value != '';
    }
    validateHorsePower(value)
    {
        return Number.isInteger(value) && value >= 0;
    }
    validatePriceAndMileage(value)
    {
        return typeof value  == 'number' && value >= 0;
    }

}