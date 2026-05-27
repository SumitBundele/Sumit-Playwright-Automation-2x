//Slicing and Combining

// Slicing & Combining
let arr = [1, 2, 3, 4, 5];
//. // slice(start, end) — returns new array,
// does NOT mutate actual ->
// ( start, end-1) . index = 0

console.log(arr.slice(2, 4)); // (start,end-1)
console.log(arr.slice(2, 5));
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(0));