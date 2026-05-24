function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    const trimmedSuite = suiteName.trim();
    const normalizedEnv = environment.trim().toLowerCase();

    return `${trimmedSuite} | ${normalizedEnv} | build-${buildNumber}`;
}