//checking Array

//Checking if something is an array 

let results = Array.isArray([1, 2, 3, 4]);
console.log(results);

let results1 = Array.isArray("a");
console.log(results1);

//every & some function with arrays

[80, 86, 94, 98].every(s => s > 70); //output = true
//where "s" is temprory veriable and "=>" Arrow function
[80, 86, 60, 98].every(s => s > 70); //output = false

//we can use in Playwright API testing 
[200, 201, 200].every(statuscode => statuscode > 200); //True




///Some atleast one must pass
[80, 86, 94, 98].some(s => s > 70); //output = false
//where "s" is temprory veriable
[80, 86, 60, 98].some(s => s > 70);//output =true

//Arrow Function : s => s > 70