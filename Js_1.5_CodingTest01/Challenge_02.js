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

function isValidJsBasicsIdentifier(name) {
    if (typeof name !== "string") {
        return false;
    }

    const trimmedValue = name.trim();

    if (trimmedValue === "") {
        return false;
    }

    const reservedWords = [
        "let",
        "const",
        "var",
        "class",
        "function",
        "return"
    ];

    if (reservedWords.includes(trimmedValue)) {
        return false;
    }

    const identifierPattern = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

    return identifierPattern.test(trimmedValue);
}


// Case 1
console.log(
    isValidJsBasicsIdentifier(" Login Button ")
);