enum Browsers {
    Chrome = "Chrome",
    firefox = "Firefox",
    Safari = "Safari",
    Edge = "Edge",
    Opera = "Opera"
}

function launchBrowser(browser: Browsers): void {
    switch (browser) {
        case Browsers.Chrome:
            console.log("Launching Chrome browser...");
            break;

        case Browsers.firefox:
            console.log("Launching Firefox browser...");
            break;
        case Browsers.Safari:
            console.log("Launching Safari browser...");
            break;
        case Browsers.Edge:
            console.log("Launching Edge browser...");
            break;
        case Browsers.Opera:
            console.log("Launching Opera browser...");
            break;
    }
}

launchBrowser(Browsers.Chrome);
launchBrowser(Browsers.firefox);
launchBrowser(Browsers.Safari);
launchBrowser(Browsers.Edge);
launchBrowser(Browsers.Opera);
//this is just to keep the clean code ..
// wehave kep the seperate file for enum and we can use it in other files also
