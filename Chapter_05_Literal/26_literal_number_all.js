/*
==================== JAVASCRIPT NUMBER TYPES ====================

JavaScript has two main number types:
1. Number - 64-bit floating-point numbers (IEEE 754 double precision)
2. BigInt - Arbitrary-precision integers (introduced in ES2020)

All numeric literals in JavaScript are of type Number by default, except when suffixed with 'n' (BigInt).

==================== NUMBER TYPE EXAMPLES ====================
*/

// 1. INTEGER LITERALS
let decimalInt = 42;        // Decimal integer
let hexInt = 0xFF;          // Hexadecimal (255 in decimal)
let binaryInt = 0b1010;     // Binary (10 in decimal)
let octalInt = 0o755;       // Octal (493 in decimal)

console.log("Decimal:", decimalInt);     // Output: Decimal: 42
console.log("Hexadecimal:", hexInt);     // Output: Hexadecimal: 255
console.log("Binary:", binaryInt);       // Output: Binary: 10
console.log("Octal:", octalInt);         // Output: Octal: 493

// 2. FLOATING-POINT LITERALS
let floatNum = 3.14;        // Standard floating-point
let scientific = 1.23e4;    // Scientific notation (12300)
let negativeExp = 5.67e-3;  // Negative exponent (0.00567)

console.log("Float:", floatNum);         // Output: Float: 3.14
console.log("Scientific:", scientific);  // Output: Scientific: 12300
console.log("Negative exp:", negativeExp); // Output: Negative exp: 0.00567

// 3. SPECIAL NUMBER VALUES
let notANumber = NaN;       // Not a Number
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let positiveZero = 0;
let negativeZero = -0;

console.log("NaN:", notANumber);         // Output: NaN: NaN
console.log("Infinity:", positiveInfinity); // Output: Infinity: Infinity
console.log("-Infinity:", negativeInfinity); // Output: -Infinity: -Infinity
console.log("Positive zero:", positiveZero); // Output: Positive zero: 0
console.log("Negative zero:", negativeZero); // Output: Negative zero: -0

// 4. BIGINT LITERALS (for very large integers)
let bigIntDecimal = 123456789012345678901234567890n;
let bigIntHex = 0xFFFFFFFFFFFFFFFFn;
let bigIntBinary = 0b11111111111111111111111111111111111111111111111111111n;

console.log("BigInt decimal:", bigIntDecimal);
// Output: BigInt decimal: 123456789012345678901234567890n
console.log("BigInt hex:", bigIntHex);
// Output: BigInt hex: 18446744073709551615n
console.log("BigInt binary:", bigIntBinary);
// Output: BigInt binary: 8796093022207n

/*
==================== NUMBER TYPE CHARACTERISTICS ====================
*/

// Number range and precision
console.log("\n--- Number Characteristics ---");
console.log("Max safe integer:", Number.MAX_SAFE_INTEGER);    // 9007199254740991
console.log("Min safe integer:", Number.MIN_SAFE_INTEGER);    // -9007199254740991
console.log("Max value:", Number.MAX_VALUE);                  // 1.7976931348623157e+308
console.log("Min value:", Number.MIN_VALUE);                  // 5e-324
console.log("EPSILON:", Number.EPSILON);                      // 2.220446049250313e-16

// Type checking
console.log("\n--- Type Checking ---");
console.log("typeof 42:", typeof 42);                        // "number"
console.log("typeof 3.14:", typeof 3.14);                    // "number"
console.log("typeof NaN:", typeof NaN);                      // "number"
console.log("typeof Infinity:", typeof Infinity);            // "number"
console.log("typeof 123n:", typeof 123n);                    // "bigint"

/*
==================== NUMBER METHODS AND OPERATIONS ====================
*/

// Number methods
let num = 123.456;
console.log("\n--- Number Methods ---");
console.log("toFixed(2):", num.toFixed(2));                  // "123.46"
console.log("toPrecision(4):", num.toPrecision(4));          // "123.5"
console.log("toString():", num.toString());                  // "123.456"
console.log("toString(16):", num.toString(16));              // "7b.74bc6a7ef9db" (hex)

// Global Number functions
console.log("\n--- Global Number Functions ---");
console.log("isNaN(NaN):", isNaN(NaN));                      // true
console.log("isNaN('hello'):", isNaN('hello'));              // true
console.log("isFinite(42):", isFinite(42));                  // true
console.log("isFinite(Infinity):", isFinite(Infinity));      // false
console.log("parseInt('42px'):", parseInt('42px'));          // 42
console.log("parseFloat('3.14abc'):", parseFloat('3.14abc')); // 3.14

/*
==================== BIGINT OPERATIONS ====================
*/

// BigInt operations
let big1 = 100000000000000000000000000000n;
let big2 = 200000000000000000000000000000n;

console.log("\n--- BigInt Operations ---");
console.log("BigInt addition:", big1 + big2);
// Output: BigInt addition: 300000000000000000000000000000n
console.log("BigInt multiplication:", big1 * 2n);
// Output: BigInt multiplication: 200000000000000000000000000000n

// BigInt methods
let bigNum = 123456789012345678901234567890n;
console.log("BigInt toString():", bigNum.toString());
console.log("BigInt valueOf():", bigNum.valueOf());

/*
==================== PRACTICAL EXAMPLES ====================
*/

// Currency calculations (use Number for precision)
let price = 19.99;
let tax = 0.08;
let total = price * (1 + tax);
console.log("\n--- Currency Example ---");
console.log("Total price:", total.toFixed(2)); // "20.79"

// Large ID numbers (use BigInt)
let userId = 999999999999999999999999999999n;
console.log("User ID:", userId);

// Scientific calculations
let avogadro = 6.02214076e23;
let planck = 6.62607015e-34;
console.log("\n--- Scientific Constants ---");
console.log("Avogadro's number:", avogadro);
console.log("Planck constant:", planck);

// Binary operations (useful for flags, permissions)
let readPermission = 0b100;    // 4 in decimal
let writePermission = 0b010;   // 2 in decimal
let executePermission = 0b001; // 1 in decimal

let userPermissions = readPermission | writePermission; // Bitwise OR
console.log("\n--- Binary Permissions ---");
console.log("User permissions:", userPermissions); // 6 (read + write)
console.log("Has read permission:", (userPermissions & readPermission) !== 0); // true
console.log("Has execute permission:", (userPermissions & executePermission) !== 0); // false

/*
==================== NUMBER CONVERSIONS ====================
*/

// Converting between types
console.log("\n--- Type Conversions ---");
console.log("Number to BigInt:", BigInt(42));        // 42n
console.log("BigInt to Number:", Number(42n));        // 42
console.log("String to Number:", Number("3.14"));     // 3.14
console.log("Boolean to Number:", Number(true));      // 1

// Safe number checking
function isSafeNumber(num) {
    return Number.isSafeInteger(num);
}

console.log("Is 42 safe?", isSafeNumber(42));                    // true
console.log("Is 9007199254740992 safe?", isSafeNumber(9007199254740992)); // false