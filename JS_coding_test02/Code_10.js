function runTestSuite() {

    const testCases = [
        {
            name: "Status code is 200",
            actual: 200,
            expected: 200,
            type: "strictEqual"
        },
        {
            name: "String equals number",
            actual: "5",
            expected: 5,
            type: "looseEqual"
        },
        {
            name: "Type check string",
            actual: "hello",
            expected: "string",
            type: "typeCheck"
        },
        {
            name: "Truthy value",
            actual: "QA",
            expected: true,
            type: "truthy"
        },
        {
            name: "Response time less than 500",
            actual: 300,
            expected: 500,
            type: "lessThan"
        }
    ];

    // var = counters
    var passCount = 0;
    var failCount = 0;
    var errorCount = 0;

    let results = [];

    console.log("===== TEST EXECUTION =====\n");

    // FOR LOOP
    for (let i = 0; i < testCases.length; i++) {

        const tc = testCases[i];
        let passed = false;

        switch (tc.type) {

            case "strictEqual":
                passed = tc.actual === tc.expected;
                break;

            case "looseEqual":
                passed = tc.actual == tc.expected;
                break;

            case "typeCheck":
                passed = typeof tc.actual === tc.expected;
                break;

            case "truthy":
                passed = !!tc.actual;
                break;

            case "lessThan":
                passed = tc.actual < tc.expected;
                break;

            default:
                errorCount++;
                results.push("ERROR");
                continue;
        }

        if (passed) {
            passCount++;
            results.push("PASS");
            console.log(`✅ TC-${i + 1}: ${tc.name} → PASS`);
        } else {
            failCount++;
            results.push("FAIL");
            console.log(`❌ TC-${i + 1}: ${tc.name} → FAIL`);
        }
    }

    // WHILE LOOP
    let consecutivePasses = 0;
    let index = 0;

    while (
        index < results.length &&
        results[index] === "PASS"
    ) {
        consecutivePasses++;
        index++;
    }

    // DO-WHILE LOOP
    let firstFailure = -1;
    let j = 0;

    do {
        if (results[j] === "FAIL") {
            firstFailure = j + 1;
            break;
        }
        j++;
    } while (j < results.length);

    const totalTests = testCases.length;

    let passRate =
        ((passCount / totalTests) * 100).toFixed(2);

    let overall =
        failCount === 0
            ? "✅ PASSED"
            : "❌ FAILED";

    console.log("\n===== SUMMARY REPORT =====");
    console.log(`Total Tests: ${totalTests}`);
    console.log(`Passed: ${passCount}`);
    console.log(`Failed: ${failCount}`);
    console.log(`Errors: ${errorCount}`);
    console.log(`Pass Rate: ${passRate}%`);
    console.log(`Consecutive Passes From Start: ${consecutivePasses}`);
    console.log(`First Failure: TC-${firstFailure}`);
    console.log(`Overall: ${overall}`);
}

// Run the suite
runTestSuite();
