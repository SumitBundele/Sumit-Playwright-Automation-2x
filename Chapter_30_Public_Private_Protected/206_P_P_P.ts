class APIClinet {
    public baseUrl: string;//child class can use this variable as it is public to the class
    protected timeout: number; //is oinly accessible within the class and its subclasses -next class/child class
    private secretKey: string; //child class cannot use this variable as it is private to the class


    constructor(baseUrl: string, timeout: number, secretKey: string) {
        this.baseUrl = baseUrl;
        this.timeout = timeout;
        this.secretKey = secretKey;
    }
    private getAuthHeader(): string {
        return `Bearer ${this.secretKey}`;
    }
    //Public funvction within my clas can call the private function within the same class
    public sendRequest(path: string): void {
        console.log("GET" + this.baseUrl + path);
        console.log("Timeout: " + this.timeout);
        console.log("Auth Header: " + this.getAuthHeader());

    }
}



;//child class can use this variable as it is public to the class
//  protected timeout: number; //is oinly accessible within the class and its subclasses -next class/child class
//  private secretKey: string; //child class cannot use this variable as it is private to the class


class userAPIClient extends APIClinet {
    getUser(): void { //if nothing mentioned is Public in Nature
        console.log("Fetch User (timeout: " + this.timeout + "): " + "ms");
        console.log("URL : " + this.baseUrl + "/user");
    }
}

//Sample code to test the above classes

class Animal {
    // Accessible everywhere (default)
    public name: string;

    // Accessible only within this class
    private secret: string;

    // Accessible within this class and subclasses
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.secret = "I can fly!";
    }

    public move(): void {
        console.log(`${this.name} is moving.`);
    }

    private revealSecret(): void {
        console.log(this.secret); // OK: accessing private member within class
    }

    protected showAge(): void {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    public bark(): void {
        console.log("Woof! Woof!");
        this.showAge();    // OK: accessing protected member from subclass
        // this.revealSecret(); // ERROR: private member not accessible here
    }
}

// --- Usage ---
const dog = new Dog("Buddy", 3);

dog.bark();       // OK: public method
dog.move();       // OK: public method
console.log(dog.name);  // OK: public property

// dog.showAge();    // ERROR: protected method
// dog.secret;       // ERROR: private property
// Quick Summary:
// Modifier	Class	Subclass
// public	Yes	Yes
// protected	Yes	Yes
// private	Yes	No
