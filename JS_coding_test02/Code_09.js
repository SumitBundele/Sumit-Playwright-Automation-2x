function loginSystem() {

    // const = fixed credentials and threshold
    const VALID_USERNAME = "admin@testingacademy.com";
    const VALID_PASSWORD = "Test@1234";
    const MAX_STRIKES = 3;

    // Sample login attempts
    const attempts = [
        { username: "admin@testingacademy.com", password: "wrong1" },
        { username: "admin@testingacademy.com", password: "wrong2" },
        { username: "admin@testingacademy.com", password: "wrong3" },
        { username: "admin@testingacademy.com", password: "Test@1234" }
    ];

    // var = global counter
    var strikeCount = 0;

    let index = 0;
    let accountLocked = false;

    do {

        let currentAttempt = attempts[index];

        // Check if account already locked
        if (accountLocked) {
            console.log(
                `Attempt ${index + 1}: 🔒 ACCOUNT LOCKED - Rejected`
            );
        }

        // Validate credentials
        else if (
            currentAttempt.username === VALID_USERNAME &&
            currentAttempt.password === VALID_PASSWORD
        ) {
            console.log(
                `Attempt ${index + 1}: ✅ LOGIN SUCCESSFUL`
            );
        }

        else {
            strikeCount++;

            console.log(
                `Attempt ${index + 1}: ❌ FAILED - Strike ${strikeCount}/${MAX_STRIKES}`
            );

            if (strikeCount >= MAX_STRIKES) {
                accountLocked = true;
                console.log("🚨 ACCOUNT LOCKED");
            }
        }

        index++;

    } while (index < attempts.length);

    console.log("\n===== SUMMARY =====");
    console.log("Failed Attempts:", strikeCount);
    console.log("Account Locked:", accountLocked ? "YES" : "NO");
}

// Execute
loginSystem();
