//let is blocked scoped
let x = "global";

if (true) {

    //TDZ starts here for x variable
    //console.log("Inside block, x:", x); // ReferenceError: Cannot access 'x' before initialization
    //console.log("Inside block, Score:", Score); // ReferenceError: Cannot access 'Score' before initialization
    //you cannot use x untill its created and initialized
    let x = "block";
    console.log("Inside block, x:", x); // Output: block





}