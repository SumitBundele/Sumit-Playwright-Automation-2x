function getEnvironmentConfig(envName) {

    // Fixed values
    const DEV_URL = "https://dev-api.testingacademy.com";
    const STAGING_URL = "https://staging-api.testingacademy.com";
    const QA_URL = "https://qa-api.testingacademy.com";
    const PROD_URL = "https://api.testingacademy.com";

    let config = "";

    switch (envName.toLowerCase()) {

        case "dev":
            config =
                "Environment: DEV\n" +
                `Base URL: ${DEV_URL}\n` +
                "API Key: dev_key_xxxx-xxxx\n" +
                "Timeout: 5000ms\n" +
                "Description: Development Environment";
            break;

        case "staging":
            config =
                "Environment: STAGING\n" +
                `Base URL: ${STAGING_URL}\n` +
                "API Key: stg_key_xxxx-xxxx\n" +
                "Timeout: 8000ms\n" +
                "Description: Staging - Pre-production mirror";
            break;

        case "qa":
            config =
                "Environment: QA\n" +
                `Base URL: ${QA_URL}\n` +
                "API Key: qa_key_xxxx-xxxx\n" +
                "Timeout: 10000ms\n" +
                "Description: Quality Assurance Environment";
            break;

        case "production":
        case "prod": // Fall-through
            config =
                "Environment: PRODUCTION\n" +
                `Base URL: ${PROD_URL}\n` +
                "API Key: prod_key_xxxx-xxxx\n" +
                "Timeout: 15000ms\n" +
                "Description: Production Environment";
            break;

        default:
            config = "Invalid Environment Name";
    }

    return config;
}

// Test Input
console.log(getEnvironmentConfig("staging"));
