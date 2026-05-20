let APIStatus = 200;

if (APIStatus === 200) {
    console.log("API call successful. Data received.");
} else if (APIStatus === 404) {
    console.log("API call failed. Resource not found.");
} else if (APIStatus === 500) {
    console.log("API call failed. Internal server error.");
} else {
    console.log("API call failed. Unknown status code: " + APIStatus);
}   