function solve()
{
    class List {
        constructor()
        {
            this.collection = [];
            this.size = this.collection.length;
        }
        add(element){
            this.collection.push(element);
            this.collection = this.collection.sort((a, b) => a - b);
            this.size = this.collection.length;
        }
        remove(index){
            if (index > this.collection.length || index < 0) {
                throw new Error("Wrong index")
            }
            this.collection.splice(index, 1);
            this.collection = this.collection.sort((a, b) => a - b);
            this.size = this.collection.length;
        }
        get(index) {
            if (index > this.size) {
                throw new Error("Wrong index")
            }
            return this.collection[index];
        }
        
    }
}