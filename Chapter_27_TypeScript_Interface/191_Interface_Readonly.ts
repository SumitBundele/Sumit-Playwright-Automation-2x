interface APIReponse {
    readonly statusCode: number;
    body: string;
    headers?: object;
    responTime?: number
}

// readOnly
// Readonly - can't modify the readonly

// ? - optional

//below object is follwing the above Interface
//Interface rules has to be followed by object

let response: APIReponse = {
    statusCode: 200, //Reaonly cannot be chnaged later
    body: '{"user": "admin"}', //body :String = Can b e chnages
};

console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.headers);

// response.statusCode = 404; //cannot be chnaged as it was set as Readonly in iInterface
response.body = "dasdadas";

//OUTPUT

// Status: 200
// Body: {"user": "admin"}
// Headers: undefined  --

// Header was optinal if not defined it will be undefined
