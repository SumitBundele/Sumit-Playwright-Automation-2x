//this ralrely used --just understand the concept of type override decorator
let element: unknown = { //object  first
    tagName: "Button",
    textContent: "Click Me",
    id: "myButton",
    disabled: false
}

//type override decorator

//In type script reverse is also allowed -objcet first and then interface

interface ElementI { //this is interface second
    tagName: string;
    textContent: string;
    id: string;
    disabled: boolean;
};

let button: ElementI = element as ElementI; //type override decorator

console.log("TAG :" + button.tagName); // Output: Button
console.log("TEXT :" + button.textContent); // Output: Click Me
console.log("ID :" + button.id); // Output: myButton
console.log("DISABLED :" + button.disabled); // Output: false
