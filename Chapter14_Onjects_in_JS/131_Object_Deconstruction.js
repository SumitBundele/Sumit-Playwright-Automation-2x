//basic destruction
let user = {
    name: "John",
    age: 30,
    isStudent: false,
    country: "USA"
};

//object destructuring
let { name, age } = user;
console.log(name); // "John"
console.log(age); // 30


//Rename Veriables 
const { name: userName, age: userAge } = user;
console.log(userName); // "John"
console.log(userAge); // 30


//Default Values
const { country = "INDIA" } = user;
console.log(country); // "INDIA" - Default value assigned because country property does not exist in user object
//if country property exists in user object, it will take that value instead of default value

//Nested object destructuring
const user2 = {
    name2: "Alice",
    address: {
        city: "New York",
        zipCode: "10001"
    }
};
const { name2, address: { city, zipCode } } = user2;
console.log(name2); // "Alice"
console.log(city); // "New York"
console.log(zipCode); // "10001"