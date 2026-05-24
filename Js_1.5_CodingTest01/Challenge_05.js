
function filterSupportedJsBasicsTopics(topics) {
    const supportedTopics = {
        node: "node",
        v8: "v8",
        npm: "npm"
    };

    const result = [];
    const seen = new Set();

    for (let topic of topics) {
        const normalized = topic.trim().toLowerCase();

        if (supportedTopics[normalized] && !seen.has(normalized)) {
            seen.add(normalized);
            result.push(normalized);
        }
    }

    return result;
}
