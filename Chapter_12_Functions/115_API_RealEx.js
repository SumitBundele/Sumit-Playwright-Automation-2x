function makeRetryTracker(maxRetries) {
    let attempts = 0;
    function tryagain(testname) {
        attempts++;
        if (attempts > maxRetries) {
            return `${testname} exceeds max retries ${maxRetries} attempts.`;
        }
        return `Retrying ${testname} attempt ${attempts} of ${maxRetries}.`;
    }
    return tryagain;
}
let retryLogin = makeRetryTracker(3);
console.log(retryLogin("Login Test"));
console.log(retryLogin("Login Test"));
console.log(retryLogin("Login Test"));
console.log(retryLogin("Login Test"));

//inner function can be called by outer function
//  by assigning to the outer function variable and then calling it.
//  This is a closure because the inner function has access to the variables of the outer function
//  even after the outer function has finished executing.
//  In this example, the tryagain function is a closure
// that has access to the attempts variable of the makeRetryTracker function.