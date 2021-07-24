class KeyValuePair<T, U>{
    private key: T;
    private value: U;

    setKeyValue(k: T, v: U){
        this.key = k;
        this.value = v
    }

    display() {
        console.log(`key = ${this.key}, value = ${this.value}`)
    }
}
let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
kvp.display();