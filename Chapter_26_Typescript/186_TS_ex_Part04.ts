function SayHello(msg: string): void { //Void will return Empty
    console.log(msg);
}

//function annotation
//Function Annotation
function greet(name: string): string {
    return `Hello, ${name}!`; //Template literal
}

//never function never return
function throwError(message: string): never {
    throw new Error(message);

}
