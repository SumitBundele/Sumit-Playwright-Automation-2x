//Single If is allowed without curly braces but it is not a good practice. Always use curly braces for better readability and to avoid bugs in the future when you add more statements to the if block.

if (true) {

}
//// Verify if a number is even or odd
let number = 11008331;
if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


// Grade calculation based on marks
let markes = 68;
if (markes > 100) {
    console.log("Not a valid marks");
} else if (markes >= 90) {
    console.log("Grade: B");
} else if (markes >= 80) {
    console.log("Grade: C");
} else if (markes >= 70) {
    console.log("Grade: D");
} else if (markes >= 0) {
    console.log("Grade: F");
    console.log("You need to rewatch all videos and practice more.");
} else {
    console.log("Invalid marks");
}