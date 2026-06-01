function logresults(Suitname, ...args) {
    console.log(`Suite Name: ${Suitname}`);
    console.log(args);
}

logresults("Login Test", 1, 2, 3, 4, 5);

logresults("Login Test", "Failed", 1000, "Error: Invalid credentials");