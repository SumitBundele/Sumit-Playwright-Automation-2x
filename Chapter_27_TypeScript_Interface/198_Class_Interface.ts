interface Excutable {
    name: string;
    run(): void;
    getStatus(): string;
}

//Interfaces are used to force rules to the classes or objects to follow the rules of the interface
class TestCase implements Excutable {
    name: string;
    private status: string;

    constructor(name: string) {
        this.name = name;
        this.status = "Not Started";
    }

    run(): void {
        this.status = "Running";
    }

    getStatus(): string {
        return this.status;
    }
}

let testCase = new TestCase("Login Test");
console.log("Test Case Name: " + testCase.name);
console.log("Test Case Status: " + testCase.getStatus());
testCase.run();
console.log("Test Case Status after run: " + testCase.getStatus());
