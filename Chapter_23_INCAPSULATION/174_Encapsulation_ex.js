class BankAccount {
    #balance = 0; //Private field hidden from Outside


    //Private veriable are encapsulated by Methods
    //this is the concept of Encapsulation

    //below methods are behaviours of Attributes
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount; //this.balance = this.balance + amount;
        }
    }
    //Private veriable are encapsulated by Methods
    //this is the concept of Encapsulation
    getBalance() {
        return this.#balance; //Controlled Access
    }
}


const account = new BankAccount(); //we user const generally because Objects afre created only one time
account.deposit(100);
account.getBalance();

console.log(account.getBalance()); // Output = 100

//console.log(account.balance); --> Undefined (no Public field by that name)
//example - using ur mother or wife your childerne are accessable
