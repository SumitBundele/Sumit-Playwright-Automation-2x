function questionName(isPresent, isDisplayed, isEnabled) {
    let status;
    let action;

    if (isPresent === false) {
        status = "NOT FOUND";
        action = "Element does not exist. Check locator.";
    }
    else if (isPresent === true && isDisplayed === false) {
        status = "HIDDEN";
        action = "Element is present but hidden. Wait for visibility.";
    }
    else if (isPresent === true && isDisplayed === true && isEnabled === false) {
        status = "DISABLED";
        action = "Element is visible but disabled. Wait for enable state or check preconditions.";
    }
    else if (isPresent === true && isDisplayed === true && isEnabled === true) {
        status = "READY";
        action = "Element is ready for interaction.";
    }

    let severity = (status === "NOT FOUND")
        ? "CRITICAL"
        : (status === "HIDDEN" || status === "DISABLED")
            ? "WARNING"
            : "OK";

    return `Status: ${status} Severity: ${severity} Action: ${action}`;
}

// Test Data
console.log(questionName(true, true, false));
