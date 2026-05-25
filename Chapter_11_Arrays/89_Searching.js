let results = ["pass", "fail", "error", "pass", "fail"];

// indexOf - returns first index or -1 if not found
console.log(results.indexOf("fail")); // 1
console.log(results.indexOf("Skip")); // -1

// lastIndexOf - searches from the end
console.log(results.lastIndexOf("fail")); // 4

// includes - returns true or false
console.log(results.includes("error")); // true
console.log(results.includes("Skip")); // false

console.log(results);

// find - returns first matching element
let num = [10, 25, 30, 45, 50, 60];

console.log(num.find(x => x > 20)); // 25



// findIndex - returns first matching index
console.log(num.findIndex(n => n > 20)); // 1

// findLast - returns last matching element
console.log(num.findLast(n => n > 20)); // 60

// findLastIndex - returns last matching index
console.log(num.findLastIndex(n => n > 20)); // 5