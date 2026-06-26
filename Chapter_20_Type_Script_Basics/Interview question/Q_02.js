//### Exercise 02 : Constructor with default values
class Environment {
    constructor(name = "Staging", port = 3000) {
        this.name = name;
        this.port = port;
    }

    getURL() {
        return "http://" + this.name + ":" + this.port;
    }

}

let evn1 = new Environment();// http://Staging:3000
//if used without arguements -default value will be printed

let evn2 = new Environment("Production", 8080); // http://Production:8080
//if used with arguements -defined value will be printed

console.log(evn1.getURL());
console.log(evn2.getURL());
