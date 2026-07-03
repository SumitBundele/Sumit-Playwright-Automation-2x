function wrapResponse<T>(statuscode: number, data: T): { statuscode: number; data: T } {
    return { statuscode: statuscode, data: data };
}

let userResponse = wrapResponse<string>(200, "User Created Successfully");
console.log(userResponse.statuscode);
console.log(userResponse.data);

let userResponse2 = wrapResponse<boolean>(200, true);
console.log(userResponse2.statuscode);
console.log(userResponse2.data);
