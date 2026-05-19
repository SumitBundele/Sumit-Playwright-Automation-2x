console.log(null >= 0);
// Output: true (null is converted to 0, so the comparison is 0 >= 0)


// ?? nulish operator
let score = 90;
score = null;
console.log(score); // Output: null

let score2 = 90;
score2 = null;
console.log(score2 ?? 5); // Output: 5


// if something null then plz assign a value
//if something is not null then plz use that value only