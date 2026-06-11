let user = {
    name: "John",
    age: 30,
    isStudent: false,
};

console.log(user);
console.log(user.name); // "John"
console.log(user["age"]); // 30

//Adding new property
user.address = "123 Main St";
console.log(user.address); // "123 Main St"

//dynamic property access
let prop = "isStudent";
console.log(user[prop]); // false


