//object can have a function 
const user = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, My Name is " + this.name + " and my age is " + this.age + "!");
    }
};

user.greet();
// "Hello, My Name is John and my age is 30!" - this refers to the user object