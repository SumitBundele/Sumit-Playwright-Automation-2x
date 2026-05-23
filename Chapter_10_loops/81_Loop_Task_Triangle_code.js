//Write a program that classifies a triangle based on its side lengths.
//  Given three input values representing the lengths of the sides, determine if the triangle is
//  equilateral (all sides are equal),
//  isosceles (exactly two sides are equal),
//  or scalene (no sides are equal).
//  Use an if-else statement to classify the triangle.
let a = 10;
let b = 30;
let c = 20;

if (a === b && b === c) {
    console.log("Equilateral Triangle");
}
else if (a === b || a === c || b === c) {
    console.log("Isosceles Triangle");

}
else if (a !== b && a !== c && b !== c) {
    console.log("Scalene Triangle");

}
else {
    console.log("invalid Triangle");
}

// or 

let a2 = 30;
let b2 = 30;
let c2 = 30;

if (a2 === b2 && b2 === c2) {
    console.log("Equilateral Triangle");
}
else if (a2 === b2 || b2 === c2 || a === c2) {
    console.log("Isosceles Triangle");
}
else {
    console.log("Scalene Triangle");
}


