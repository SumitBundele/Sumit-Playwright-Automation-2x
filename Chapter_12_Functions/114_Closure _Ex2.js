function makeCounter(start = 0) {
    let count = start;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        get() {
            return count;
        }
    };
}

let counter1 = makeCounter(0);

counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1.get()); // 4

counter1.decrement();
console.log(counter1.get()); // 0

let counter2 = makeCounter(10);
counter2.increment();
console.log(counter2.get()); // 11