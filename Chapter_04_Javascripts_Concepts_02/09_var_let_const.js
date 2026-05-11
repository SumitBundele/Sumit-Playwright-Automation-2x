var v = 10;
let l = 20;
const c = 3.14;

var bowser = "Chrome";
var bowser = "Firefox"; // var allows redeclaration

browser = "Edge"; // var allows reassignment

/* for loop ,function -Inside loop ,outside loop example 

for (var i = 0; i < 3; i++) {
    console.log("inside loop:", i);
}

console.log("outside loop:", i);
*/

function testfunction() {

    console.log("Hello Sumit from testfunction");
}
testfunction();

testfunction();

testfunction();
// console.log(x); // ReferenceError: x is not defined
