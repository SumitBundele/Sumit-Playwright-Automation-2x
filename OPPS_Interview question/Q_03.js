//exercise `this` referes to Current Object
class User {
    constructor(name) {
        this.name = name;
    }
    greet() { //method greet
        console.log("Hi,i am " + this.name);
    }
}

let U1 = new User("Sumit"); //called with user Sumit
let U2 = new User("Vivan");//Called with user Vivan
U1.greet();
U2.greet();
