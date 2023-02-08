class Hex {
    constructor(value)
    {
        this.value = value;
    }
    valueOf(){
        return this.value;
    }
    toString(){
        return `0x${this.value.toString(16).toLocaleUpperCase()}`
    }
    plus(number){
        return new Hex(this.value + num);
    }
    minus(number){
        return new Hex(this.value - num);
    }
    parse(number){
        return parseInt(num, 16);
    }
}