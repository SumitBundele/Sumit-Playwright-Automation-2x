//Exercise 04 - Mthod chaining with `this.`
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {   //method 1
        this.count++;
        return this;
    }

    display() { //Method 2
        console.log("Count:", this.count);
        return this;
    }
}
new Counter().increment().increment().increment().display();
//we can call methods multiple times
