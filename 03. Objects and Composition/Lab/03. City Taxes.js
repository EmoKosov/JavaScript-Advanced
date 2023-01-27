function solve(name, population, treasury)
{
    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes()
        {
            this.treasury += this.taxRate * this.population;
        },
        applyGrowth(percentage)
        {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage)
        {
            this.treasury -= this.treasury * percentage / 100;
        },
    }
    return result;
}