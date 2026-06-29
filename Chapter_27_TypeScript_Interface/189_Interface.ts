interface TestCase { //interface
    Id: number;
    name: String;
    status: String;
    duration: number;
}


//we have added tha rules using the Interface to strictly follow
//test1 object should have all the values declared in Interface

let test1: TestCase = { //Objcet
    Id: 1,
    name: "login with Valid Credential",
    status: "PASS",
    duration: 1500
}
console.log("TC-" + test1.Id + ":" + test1.name + ":" + test1.status);


let test2: TestCase = { //Objcet
    Id: 2,
    name: "login with InValid Credential",
    status: "Fail",
    duration: 1500
}
console.log("TC-" + test2.Id + ":" + test2.name + ":" + test2.status);
