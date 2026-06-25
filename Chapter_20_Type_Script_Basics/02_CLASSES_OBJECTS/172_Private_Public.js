//Private Fields (#)-- Hidden Data
//Public Fields

class credentials {
    #APIkey; //Private Veriables are not allowed to uswe outside
    user;
    constructor(user, key) {
        this.user = user;
        this.#APIkey = key;
    }

    //Custom Made function by us
    sumitgetAuthHeader() {
        return "Bearer" + this.#APIkey; //Private Veriables are allowed inside class
    }
}

let cred = new credentials("Admin", "Secret_Key_12345");
console.log(cred.user);
//console.log(cred.APIkey); //undefined
//console.log(cred.#APIkey);//error
const token = cred.sumitgetAuthHeader();//accessing private veriable
console.log(token);
