function classifyBug(frequency, impact) {

    let severity = "";

    // Nested if-else
    if (frequency === "always") {

        if (impact === "blocker") {
            severity = "P0 - Critical: Stop release immediately";
        } else if (impact === "major") {
            severity = "P1 - High Priority";
        } else if (impact === "minor") {
            severity = "P2 - Medium Priority";
        }

    } else if (frequency === "often") {

        if (impact === "blocker") {
            severity = "P1 - High Priority";
        } else if (impact === "major") {
            severity = "P2 - Medium Priority";
        } else if (impact === "minor") {
            severity = "P3 - Low Priority";
        }

    } else if (frequency === "rarely") {

        if (impact === "blocker") {
            severity = "P2 - Medium Priority";
        } else if (impact === "major") {
            severity = "P3 - Low Priority";
        } else if (impact === "minor") {
            severity = "P4 - Very Low Priority";
        }

    } else {
        severity = "Unknown Frequency";
    }

    return `Bug Title: Checkout page crashes on applying coupon
Frequency: ${frequency}
Impact: ${impact}
Severity: ${severity}`;
}

// Test Input
console.log(classifyBug("always", "blocker"));
