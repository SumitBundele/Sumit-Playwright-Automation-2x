interface TestConfiguration {
    browser: string;
    headless: boolean;
    baseUrl: string;
    timeout?: number; //? -these are optional Parameter
    retries?: number; //? -these are optional Parameter
}


//we can use the same interface with optional parameters
//  and without optional parameters to create different configuration objects

let ciConfig: TestConfiguration = {
    browser: "chrome",
    headless: true,
    baseUrl: "https://example.com",
};


let localConfig: TestConfiguration = {
    browser: "chrome",
    headless: true,
    baseUrl: "https://example.com",
    timeout: 30000,
    retries: 3
};

console.log("CI Config:", ciConfig.browser, "| timeout:", ciConfig.timeout);
console.log("Local Config:", localConfig.browser, "| timeout:", localConfig.timeout, "| retries:", localConfig.retries);
