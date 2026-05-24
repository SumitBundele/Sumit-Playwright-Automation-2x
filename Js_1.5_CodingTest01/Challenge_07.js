function summarizeJsBasicsResults(results) {
    const summary = {
        total: results.length,
        passed: 0,
        failed: 0,
        skipped: 0
    };

    for (let result of results) {
        const normalized = result.toLowerCase();

        if (normalized.includes("pass")) {
            summary.passed++;
        }

        if (normalized.includes("fail")) {
            summary.failed++;
        }

        if (normalized.includes("skip")) {
            summary.skipped++;
        }
    }

    return summary;
}