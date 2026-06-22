function questionName(input) {
    let passCount = 0;
    let failCount = 0;
    let skipCount = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "pass") {
            passCount++;
        } else if (input[i] === "fail") {
            failCount++;
        } else if (input[i] === "skip") {
            skipCount++;
        }
    }

    let totalTests = input.length;
    let passRate = ((passCount / totalTests) * 100).toFixed(2);

    let verdict;

    if (failCount === 0) {
        verdict = "All tests passed. Ready for release.";
    } else if (failCount <= 2) {
        verdict = "Minor failures. Review before release.";
    } else {
        verdict = "Critical failures. Block release.";
    }

    let answer =
        `Total Tests : ${totalTests} ` +
        `Passed: ${passCount} ` +
        `Failed: ${failCount} ` +
        `Skipped: ${skipCount} ` +
        `Pass Rate: ${passRate}% ` +
        `VERDICT: ${verdict}`;

    return answer;
}

let testResults = [
    "pass",
    "pass",
    "fail",
    "pass",
    "skip",
    "pass",
    "fail",
    "pass"
];

console.log(questionName(testResults));
