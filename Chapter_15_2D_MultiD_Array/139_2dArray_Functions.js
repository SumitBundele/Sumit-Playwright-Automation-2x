let scores = [
    [85, 90, 78],
    [60, 45, 70],
    [95, 88, 92]
];
let rowSum = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowSum);

let SuitResults = [
    ["login-pass", "ragister-pass", "logout-pass"],//Auth suit
    ["search-pass", "filter-fail", "sort-pass"], //search suit
    ["checkou-fail", "payment-fail", "confirm-pass"]//payment suit

];
for (let i = 0; i < SuitResults.length; i++) {
    for (let j = 0; j < SuitResults[i].length; j++) {
        if (SuitResults[i][j].includes("pass")) {
            console.log(SuitResults[i][j]);
        }
    }
}
