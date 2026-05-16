console.log(Score);
let Score = 100; // ReferenceError: Cannot access 'Scor' before initialization

{
    //temporally dead zone (TDZ) for Score variable starts here
    //console.log(Score); --> ReferenceError: Cannot access 'Score' before initialization
    //let Score = 100; --> ReferenceError: Cannot access 'Score' before initialization



    let Score = 200; // This is a different variable, scoped to this block
    console.log("Inside block, Score:", Score); // Output: 200
}