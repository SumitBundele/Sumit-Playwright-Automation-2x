class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + "is Eating");
    }
    sleep() {
        console.log(this.name + "is Sleeping");
    }
}

class Dog extends Animal { //access your parenst function using -- >extends
    constructor(name, breed) {
        super(name)//this is used for the Parent Constructor
        this.breed = breed;
    }
    bark() {
        console.log(this.name + "is Barking");
    }
}


let dog = new Dog("Bruno", "Lebrador");
dog.eat();
dog.sleep();
dog.bark();

console.log(dog.breed);
console.log(dog.name);
