function runtype(name, status, runtime) {
    return (`Test Name: ${name}, Status: ${status}, Runtime: ${runtime}ms`);
}

runtype("Login Test", "Passed", 500);

console.log(runtype("Login Test", "Failed", 1000));