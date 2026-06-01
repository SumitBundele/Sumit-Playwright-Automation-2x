function add(a, b, c, d) {
    return a + b + c + d;
}
let num = [1, 2, 3, 4];
console.log(add(...num)); //Spread operator 


//Using Spread operator in function call
let responsecode = [200, 400, 500];
function haserror(...codes) {
    return codes.some(code => code >= 400);
}
console.log(haserror(...responsecode)); //Spread operator
