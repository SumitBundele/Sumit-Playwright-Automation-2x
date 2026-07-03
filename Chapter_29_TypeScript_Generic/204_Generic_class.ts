class testDataStorege<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }
    getFirstItem(): T | undefined {
        return this.items[0];
    }
    count(): number {
        return this.items.length;
    }
}

let statuscodestore = new testDataStorege<number>();
statuscodestore.addItem(200);
statuscodestore.addItem(400);
statuscodestore.addItem(500);

let testNameStore = new testDataStorege<string>();
testNameStore.addItem("Login Test");
testNameStore.addItem("Logout Test");
testNameStore.addItem("Payment Test");


console.log("First Status Code: " + statuscodestore.getFirstItem());
console.log("Total Status Codes: " + statuscodestore.count());
console.log("First Test Name: " + testNameStore.getFirstItem());
console.log("Total Test Names: " + testNameStore.count());
//generic are aleays used when we are not sure about the data type
//  and we want to use any data type in the class or function
