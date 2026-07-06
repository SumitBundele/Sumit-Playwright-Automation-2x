
//creating object without leting know the Datatype of the object

let RawResponse: unknown = {
    status: 200,
    body: { user: "Admin", role: "Tester" }

};

interface userResponse {
    status: number;
    body: {
        user: string;
        role: string;
    }
}

let respose = RawResponse as userResponse; //type override decorator

console.log("STATUS :" + respose.status);
console.log("USER :" + respose.body.user);
console.log("ROLE :" + respose.body.role);
