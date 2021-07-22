function getTickets(tickets: Array<string>, criteria: string){
    class Ticket{
        constructor (public destination: string, public price: number, public status: string) {};
    }
    let allTickets = tickets.map((t) => {
        let [destination, price, status] = t.split('|');
        return new Ticket(destination, Number(price), status)
    }).sort((a, b) => a[criteria].localeCompare(b[criteria]))

    console.log(allTickets)
}

getTickets([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ],
    'status')