enum Severity {
    LOW = "low Severifty you can proceed!",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical"
}

//ENUM used to seperate the constant values from the code and make it more readable and maintainable

console.log(Severity.LOW); // Output: "low"
console.log(Severity.MEDIUM); // Output: "medium"
console.log(Severity.HIGH); // Output: "high"
console.log(Severity.CRITICAL); // Output: "critical"


enum environment {
    DEV = "https://dev.api.com",
    QA = "https://qa.api.com",
    STAGING = "https://staging.api.com",
    PROD = "https://prod.api.com"
}

console.log(environment.DEV); // Output: "https://dev.api.com"
console.log(environment.QA); // Output: "https://qa.api.com"
console.log(environment.STAGING); // Output: "https://staging.api.com"
console.log(environment.PROD); // Output: "https://prod.api.com"
