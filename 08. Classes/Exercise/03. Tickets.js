function solve(arr, criteria)
{
    let collection = [];
    class Ticket {
        constructor(destination, price, status)
        {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }

    }

    for (const args of arr) {
        let [destinationName, price, status] = args.split('|');
        let ticket = new Ticket(destinationName, price, status);
        collection.push(ticket);
    }
    
    
    let sorted;
    if (criteria !== "price") {
        sorted = collection.sort((a, b) => a[criteria].localeCompare(b[criteria]));

    }
    else {
        sorted = collection.sort((a, b) => a.price - b.price);
    }
    return sorted;
    
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));