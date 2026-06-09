const user = {

    firstname: "Sumit",
    lastname: "Bundele",
    get fullName() {
        return this.firstname + this.lastname;
    },
    set fullName(value) {
        [this.firstname, this.lastname] = value.split(" ");
    }
}
console.log(user.fullName);
user.fullName = "Vivan B";
console.log(user.fullName);

//we are not going to use this in playwright -
// this is older veriosn before OOP was introduced to JS

//new Way is by creating class



