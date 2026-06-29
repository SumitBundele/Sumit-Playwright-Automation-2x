class Car {
    //CAB

    //Constructor

    constructor(name_given_during_object_creation) {
        this.name = name_given_during_object_creation;
    }


    //Attributes



    //Behaviour

    drive() {
        console.log("I am driving ", this.name);
    }


}
let Scorpio = new Car("Scorpio N");
Scorpio.drive();

let mahindra = new Car("XUV");
mahindra.drive();
