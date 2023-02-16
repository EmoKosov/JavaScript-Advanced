class Hex {
    constructor(number) {
        this.number = number;
    }
    valueOf(){
        return this.number;
    }
    plus(value){
        let newVal = this.number + value;
        return new Hex(newVal);
    }
    minus(value){
        let newVal = this.number - value;
        return new Hex(newVal);
    }
    parse(str){
        return parseInt(typeof str === 'string' ? str : {str}, 16);
    }
    toString(){
        return `0x${this.number.toString(16).toUpperCase()}`;
    }
}