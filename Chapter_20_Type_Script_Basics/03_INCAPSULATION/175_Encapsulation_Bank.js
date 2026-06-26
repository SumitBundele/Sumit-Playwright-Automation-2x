class ICICI {
    #balance

    constructor(name, balance) {
        this.#balance = balance; //private
        this.name = name; //public
    }
    getBalance() {  //Getter Method
        return this.#balance;
    }

    //Private veriable can only be access by Getter method and SET by Setter Method

    setBalance(balance, isCashier) { //Setter Method
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not Allowed");
        }
    }
}

//if cashier = false
let sumit = new ICICI("Summit", 1000);
console.log(sumit.getBalance());
sumit.setBalance(100000, false);
console.log(sumit.getBalance());

//if cashier = true
let sumit_02 = new ICICI("Summit", 1000);
console.log(sumit_02.getBalance());
sumit_02.setBalance(100000, true);
console.log(sumit_02.getBalance());
