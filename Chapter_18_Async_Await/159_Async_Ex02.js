//whenever a function returning a promis it will alwasy use await
//bleow is the xample

function getToken() {
    return Promise.resolve("abc1234"); //return Promise
}


//function defined
async function run() { //function using Promise - so used async
    let token = await getToken(); //it will alwasy use await -when it will return something
    console.log(token);
}
//calling function
run();
