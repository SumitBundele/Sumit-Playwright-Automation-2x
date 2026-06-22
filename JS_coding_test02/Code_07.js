function analyzeResponseTimes(responseTimes) {

    const SLA_LIMIT = 500;

    let min = responseTimes[0];
    let max = responseTimes[0];
    let total = 0;
    let breaches = 0;

    let index = 0;

    while (index < responseTimes.length) {

        let currentTime = responseTimes[index];

        // Min tracking
        if (currentTime < min) {
            min = currentTime;
        }

        // Max tracking
        if (currentTime > max) {
            max = currentTime;
        }

        // Total for average
        total += currentTime;

        // SLA breach check
        if (currentTime > SLA_LIMIT) {
            breaches++;
        }

        index++;
    }

    let average = (total / responseTimes.length).toFixed(2);
    let breachPercentage =
        ((breaches / responseTimes.length) * 100).toFixed(2);

    let status =
        breaches > 0
            ? "❌ SLA VIOLATED"
            : "✅ SLA MET";

    return `Total Requests: ${responseTimes.length}
Min Response: ${min}ms
Max Response: ${max}ms
Average Response: ${average}ms
SLA Breaches: ${breaches} (${breachPercentage}%)
Overall Status: ${status}`;
}

// Test Data
let responseTimes = [120, 230, 450, 510, 180, 620];

// Print Output
console.log(analyzeResponseTimes(responseTimes));
