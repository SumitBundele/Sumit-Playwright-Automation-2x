let browser = "brave";

switch (browser) {
    case "chrome":
    case "opera":
    case "edge":
    case "brave":

        console.log("We are using Chromium based browser");
        break;
    case "firefox":
        console.log("We are using Mozilla browser");
        break;

    case "safari":
        console.log("We are using Apple browser");
        break;

    default:
        console.log("Unknown browser");
} 
