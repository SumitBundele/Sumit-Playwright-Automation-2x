function summarizeJsBasicsMatrix(matrix) {
    const summary = {
        total: 0,
        passed: 0,
        failed: 0,
        failedCases: []
    };

    for (let row of matrix) {
        for (let result of row) {
            summary.total++;

            const normalized = result.toLowerCase();

            if (normalized.includes("pass")) {
                summary.passed++;
            }

            if (normalized.includes("fail")) {
                summary.failed++;
                summary.failedCases.push(result);
            }
        }
    }

    return summary;
}