
//Function 1
function buildEndpoint(base: string, path: string): string {
    return base + path;
}

console.log(buildEndpoint("https://api.com", "/users"));

//Function 2
function isSuccessCode(code: number): boolean {
    return code >= 200 && code < 300;
}

console.log("200 is Success:", isSuccessCode(200));
console.log("404 is Failure:", isSuccessCode(404));

//Function 3

function logTestSteps(step: string): void {
    console.log("[STEP]" + step);
}

logTestSteps("Nevigate to Login PAge");

//Output

// https://api.com/users
// 200 is Success: true
// 404 is Failure: false
// [STEP]Nevigate to Login PAge
