let unknown: unknown = "hello";

//as u assign "hello" to unknown --it becomes string
//hence it will print "Hi"
if (typeof unknown === "string") {
    console.log("Hi")
}


//Function Annotation
function greet(name: string): string {
    return `Hello, ${name}!`; //Template literal
}

//object annotation
let user: { name: string, age: number } = {
    name: "sumit",
    age: 30
};
