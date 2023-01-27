function createSortedList() {
    let sortedList = {
        collection: [],
        add(element) {
            this.collection.push(Number(element));
            this.collection.sort((a, b) => a - b);
        },
        remove(index) {  
            if (index > -1) {
                this.collection.splice(index, 1);
            }
        },
        get(index) {
            return this.collection[index];
        },
        get size() {
            return this.collection.length;
        }
    };
    return sortedList;

}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.size());

console.log(list.get(1)); 
list.remove(1);
console.log(list.size());
console.log(list.get(1));
