interface BasePage {
    url: string;
    title: string;
    // OpenVWO(url: string): void; //function signature
}

interface LoginPage extends BasePage {
    usernameselector: string;
    passwordselector: string;
    loginbuttonselector: string;
}

interface freeTrialPage extends BasePage {
    usernameselector: string;
    submitbuttonselector: string;
}


//real thing will come when u will create an object of this interface
//one or more interface can be extended to create a new interface
//also can interact with each other to create a new interface

let loginPage: LoginPage = {
    url: "https://example.com/login",
    title: "Login Page",
    usernameselector: "#username",
    passwordselector: "#password",
    loginbuttonselector: "#loginButton",

};

let freeTrialPage: freeTrialPage = {
    url: "https://example.com/free-trial",
    title: "Free Trial Page",
    usernameselector: "#username",
    submitbuttonselector: "#submitButton",

};

console.log("Login Page URL:", loginPage.url, "| Title:", loginPage.title, "| Username Selector:", loginPage.usernameselector);
console.log("Free Trial Page URL:", freeTrialPage.url, "| Title:", freeTrialPage.title, "| Username Selector:", freeTrialPage.usernameselector);
