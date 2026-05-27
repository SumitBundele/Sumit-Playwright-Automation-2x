let fruits = ["banana", "cherry", "apple"];
fruits.sort()
console.log(fruits);


let number = [2, 4, 6, 3, 5, 1];
number.sort();
console.log(number);


//Natural Sorting or Lexographical Sorting -this is based on the firsr number letter
let s = [2, 1, 20, 10, 30, 3];
s.sort();
console.log(s);

// To sort numerically, pass a compare function:
//     s.sort((a, b) => a - b);
// console.log(s); // [1, 2, 3, 10, 20, 30]

s.sort((a, b) => a - b); //Assending
console.log(s);

s.sort((a, b) => b - a);//Descending
console.log(s);

//(a, b) => a - b -> ?
// this is function which can sort the two number ->
//  a-b ->  -1 then  b > a,
//  a-b -> 0 then a===b ,
//  a-b -> 1 then a > b) =
// sorting will happened based on this logic. 

