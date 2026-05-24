function countPassingJsBasicsChecks(checks) {
    let count = 0;

    for (let check of checks) {
        if (check.toLowerCase().includes("pass")) {
            count++;
        }
    }

    return count;
}