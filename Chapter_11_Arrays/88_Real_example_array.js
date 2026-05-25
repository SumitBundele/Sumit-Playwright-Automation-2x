let browser = ['chrom', 'firefox', 'opera', 'safari', 'edge'];
console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

let remove = browser.shift();
console.log(browser);
console.log(remove);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from Selenium!");
    }
}


