class Browser {
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " is Launched");
    }

    StartBrowser() {
        console.log("Starting the Browser");
    }
    ClosetheBrowser() {
        console.log("closing the Browser");
    }
}

let chrome = new Browser("Chrome");
let Firefox = new Browser("Firefox");

console.log(chrome.isOpen);
