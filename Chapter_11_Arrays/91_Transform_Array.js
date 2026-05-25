let score = [45, 82, 91, 60, 73];
//map -> Transform every element ,returns a new array
//it will returnm the same number of elements -
// but bases on condition values will be chnages 

let grades = score.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);

//outpu - [ 'Fail', 'Pass', 'Pass', 'Fail', 'Pass' ]

//filter--> it will only keep the elements which are Pass
let passing_Students = score.filter(s => s > 70);
console.log(passing_Students);

//Reduce-- > Accumelate to single value doing sum of elemtnst 

let total = score.reduce((a, b) => a + b, 0);
console.log(total);

//Flat = > flattern nested array 

let nested = [[1, 2], [3, 4], [5, 6]];
let flat = nested.flat();
console.log(flat); 
