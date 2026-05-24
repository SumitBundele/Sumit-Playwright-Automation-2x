function classifyJsBasicsScore(score) {
    if (score >= 90) {
        return "EXCELLENT";
    }

    if (score >= 75) {
        return "GOOD";
    }

    if (score >= 50) {
        return "NEEDS_PRACTICE";
    }

    return "REVISIT";
}

// Examples
console.log(classifyJsBasicsScore(95)); // EXCELLENT
console.log(classifyJsBasicsScore(82)); // GOOD
console.log(classifyJsBasicsScore(67)); // NEEDS_PRACTICE
console.log(classifyJsBasicsScore(40)); // REVISIT