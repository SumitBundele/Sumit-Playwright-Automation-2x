interface APIResponse {
    body: String;
    header?: object; //? -these are optional Parameter
    responseTime?: number;//? -these are optional Parameter
}

let response1: APIResponse = {
    body: "Hi Sumit"

};

let response2: APIResponse = {
    body: "Hi Sumit",
    header: {},
    responseTime: 400,

};
