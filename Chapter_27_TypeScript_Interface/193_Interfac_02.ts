interface Calculator {
    add: (a: number, b: number) => number; //interface can have incomplete implementation of function
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
}


//when u use interface(Calculator) in object then you have to strictly implement all the function in object
//calc = object reference of interface(Calculator) and it will implement all the function in object using arrow function
const calc: Calculator = {
    //if you use /complete interface(Calcumlator) then you have to implement all the function in object
    // it will allow you to complete them in object using arrow function
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};
console.log(calc);
//this is called as abstract implementation of interface,
// where we have defined the function in interface
// and implemented them in object using arrow function
