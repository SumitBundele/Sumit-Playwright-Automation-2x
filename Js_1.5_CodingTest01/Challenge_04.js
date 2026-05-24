function getJsBasicsKeywordMeaning(term) {
    const keywords = {
        node: "runtime",
        v8: "engine",
        npm: "package-manager"
    };

    const normalizedTerm = term.trim().toLowerCase();

    return keywords[normalizeTerm] || "unknown";
}