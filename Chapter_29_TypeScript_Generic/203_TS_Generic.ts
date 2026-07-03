//something which is generic in nature ==common ,general

function getString(name: string): string {
    return "Sumit";
}

getString("Amit");

//generic data type --we can use any data type using <T>
//! non num Assertion Operator --it will tell the compiler that the value will not be null or undefined

function getFirstResult<T>(value: T[]): T {
    return value[0]!;
}
let firstString = getFirstResult<string>(["Vivan", "Sumit", "Rohit"]);
console.log(firstString);
let firstCode = getFirstResult<number>([1, 2, 3, 4]);
console.log(firstCode);

//Generic are ralrely used in Playwright but it is used in some cases where we need to use generic data type
