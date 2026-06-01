function retry(testname, maxRetries = 6, delay = 1000) { //Default parameter
    console.log(`Retrying ${testname} up to ${maxRetries} times with a delay of ${delay}ms between attempts.`);
}

retry("Login Test", 3, 1000);

retry("Login Test", 5); // delay will be 1000

retry("Login Test"); // maxRetries will be 6 and delay will be 1000




//In this example, the retry function takes three parameters: testname, maxRetries, and delay.
// The testname parameter is a string that represents the name of the test being retried.
// The maxRetries parameter is a number that specifies how many times to retry the test before giving up.
// The delay parameter is a number that specifies how long to wait (in milliseconds) between each retry attempt.

