class TestCase {
    constructor(name, status, priority) { //this is perameterised Constructor
        this.name = name;
        this.status = status;
        this.priority = priority;

    }

    display() { //function in the class is calles as Method --this is Method
        console.log("Test Name :" + this.name + "|" + "TEST Status :" + this.status + "|" + "Test Priority :" + this.priority);
    }
}

let loginTC = new TestCase("Login Test", "PASS", "P0");
let SignUpTC = new TestCase("SignUp TC", "FAIL", "P1");

loginTC.display();
SignUpTC.display();

//Function Vs Methid
//every Methods are a function
//Function is outside the class
//Method is inside a class
