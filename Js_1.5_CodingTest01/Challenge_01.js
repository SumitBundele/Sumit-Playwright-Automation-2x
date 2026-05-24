/**
 * Validate names used in helper functions, variables,
 * or test data keys.
 *
 * Rules:
 * - Must be a non-empty string after trimming
 * - Must start with a letter, underscore, or $
 * - Remaining characters may contain letters, digits, _ or $
 * - Reserved words are not allowed
 */



function normalizeJsBasicsLabel(label) {
    const normalized = label
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    return normalized
        ? `js-basic-${normalized}`
        : "js-basic";
}

// Examples
// Case 1
console.log(
    normalizeJsBasicsLabel(" Login Button ")
);
// Output: js-basic-login-button

// Case 2
console.log(
    normalizeJsBasicsLabel("User Profile: Edit!")
);
// Output: js-basic-user-profile-edit

// Case 3
console.log(
    normalizeJsBasicsLabel("---Search@@Box---")
);
// Output: js-basic-search-box

// Case 4
console.log(
    normalizeJsBasicsLabel(" ")
);
// Output: js-basic