class Person {


    constructor() {
        console.log("I will be created when Object is created");
    }
    //Attribute
    name;
    email;
    salary;
    address;

    //Behaviour
    sleep() { }
    eat() { }
    walk() { }
}

const obj_ref = new Person();
//obj_ref = is Calles the Object Reference
//new Person(); ---> this is the Object with the new keyword
//Object will Automatically Call constructor
console.log(obj_ref);
