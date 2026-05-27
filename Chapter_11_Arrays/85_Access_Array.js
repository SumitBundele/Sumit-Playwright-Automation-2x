//Accessing & Modifieng 

let Statuses = ["Pass", "fail", "skip"];
console.log(Statuses[0]);
console.log(Statuses[2]);

//"at" function should be use
//  when u are using negative index e.g -1,-2,-3 indexes values
console.log(Statuses.at(-1));
console.log(Statuses.at(-2));
console.log(Statuses.at(-3));
//console.log(Statuses.at(-4)); ---> Undefined

//Modify 

Statuses[1] = "Blocked";
console.log(Statuses);
