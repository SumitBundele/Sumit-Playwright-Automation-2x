function generateTestUsers() {
    // const = fixed values
    const roles = ["admin", "editor", "viewer", "tester", "manager"];

    // var = global counter
    var totalUsers = 8;

    let output = "";

    // let = loop variable
    for (let i = 1; i <= totalUsers; i++) {

        let userId = "USR-" + String(i).padStart(4, "0");
        let name = "TestUser_" + i;
        let email = "testuser" + i + "@testingacademy.com";

        // Cycle through roles
        let role = roles[(i - 1) % roles.length];

        // Every 3rd user inactive
        let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

        output += `${userId} | ${name} | ${email} | ${role} | ${status}\n`;
    }

    return output;
}

// Print output
console.log(generateTestUsers());
