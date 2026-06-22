function retryApiCall() {
    let maxAttempts = 5;
    let attempt = 0;
    let success = false;
    let result = "";

    do {
        attempt++;

        let randomValue = Math.random();

        if (randomValue > 0.6) {
            result += `Attempt ${attempt}: SUCCESS (Response 200 OK)\n`;
            success = true;
        } else {
            result += `Attempt ${attempt}: FAILED (Timeout/Error)\n`;
        }

    } while (!success && attempt < maxAttempts);

    if (success) {
        result += `API call PASSED after ${attempt} attempt(s).`;
    } else {
        result += `API call FAILED after ${maxAttempts} attempt(s).`;
    }

    return result;
}

console.log(retryApiCall());
