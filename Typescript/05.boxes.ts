class Box<T> {
    public storage: Array<T> = [];

    public add(element: T) {
        this.storage.push(element)
    }
    public remove() {
        this.storage.shift()
    }
    public count(): number {
        return this.storage.length;
    }
}
 
let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);