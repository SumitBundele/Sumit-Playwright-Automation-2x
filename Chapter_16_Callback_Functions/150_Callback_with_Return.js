
function Calculate(a, b, operation) {
    return operation(a, b);
}
let sum = Calculate(10, 20, function (x, y) {
    return x + y;
})

console.log(sum);
