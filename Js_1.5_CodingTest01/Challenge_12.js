function createUniqueJsBasicsTags(tags) {
    const result = [];
    const seen = new Set();

    for (let tag of tags) {
        const normalized = tag.trim().toLowerCase();

        if (normalized !== "" && !seen.has(normalized)) {
            seen.add(normalized);
            result.push(normalized);
        }
    }

    return result;
}