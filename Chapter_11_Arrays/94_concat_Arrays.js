let a = [1, 2];
let b = [3, 4];
//let c = a + b;


//to combine two arrays use concat function

let c = a.concat(b);
console.log(c);

//spread mordern way of concatination 
//"..." represent all the emements in arrays
let d = [...a, ...b];
console.log(c);

//Join function
let s = ["pass", "fail", "skip", "fail"].join("-");
console.log(s);
