# JavaScript String Methods Cheat Sheet

A comprehensive quick reference guide for JavaScript string methods with one-liner examples.

---

## Table of Contents

1. [Creation & Access](#1-creation--access)
2. [Extraction & Slicing](#2-extraction--slicing)
3. [Searching](#3-searching)
4. [Modification & Replacement](#4-modification--replacement)
5. [Trimming & Padding](#5-trimming--padding)
6. [Repetition & Concatenation](#6-repetition--concatenation)
7. [Testing & Checking](#7-testing--checking)
8. [Conversion](#8-conversion)
9. [Quick Practice Snippets](#9-quick-practice-snippets)

---

## 1. Creation & Access

| # | Method | Description | Example | Output |
|:---:|:---|:---|:---|:---:|
| 1 | `charAt(index)` | Returns character at specified index | `"Hello".charAt(1)` | `"e"` |
| 2 | `charCodeAt(index)` | Returns Unicode of character at index | `"A".charCodeAt(0)` | `65` |
| 3 | `codePointAt(index)` | Returns Unicode code point at index | `"𠮷".codePointAt(0)` | `134071` |
| 4 | `at(index)` | Returns character at index (supports negative) | `"Hello".at(-1)` | `"o"` |
| 5 | `length` | Property: returns number of characters | `"Hello".length` | `5` |
| 6 | `String.fromCharCode(n)` | Returns character from Unicode value | `String.fromCharCode(65)` | `"A"` |

---

## 2. Extraction & Slicing

| # | Method | Description | Example | Output |
|:---:|:---|:---|:---|:---:|
| 7 | `slice(start, end)` | Extracts section of string | `"Hello".slice(1, 4)` | `"ell"` |
| 8 | `substring(start, end)` | Similar to slice but no negative indices | `"Hello".substring(1, 4)` | `"ell"` |
| 9 | `substr(start, length)` | Extracts `length` chars from start | `"Hello".substr(1, 3)` | `"ell"` |
| 10 | `split(separator)` | Splits string into array | `"a,b,c".split(",")` | `["a","b","c"]` |

---

## 3. Searching

| # | Method | Description | Example | Output |
|:---:|:---|:---|:---|:---:|
| 11 | `indexOf(search)` | Returns first index of match, or -1 | `"Hello".indexOf("l")` | `2` |
| 12 | `lastIndexOf(search)` | Returns last index of match, or -1 | `"Hello".lastIndexOf("l")` | `3` |
| 13 | `includes(search)` | Checks if string contains substring | `"Hello".includes("ll")` | `true` |
| 14 | `startsWith(search)` | Checks if string starts with substring | `"Hello".startsWith("He")` | `true` |
| 15 | `endsWith(search)` | Checks if string ends with substring | `"Hello".endsWith("lo")` | `true` |
| 16 | `search(regex)` | Searches using regex, returns index | `"Hello".search(/l/)` | `2` |
| 17 | `match(regex)` | Returns array of matches | `"abc123".match(/\d+/)` | `["123"]` |
| 18 | `matchAll(regex)` | Returns iterator of all matches | `..."abc123".matchAll(/\d/g)` | Iterator |

---

## 4. Modification & Replacement

| # | Method | Description | Example | Output |
|:---:|:---|:---|:---|:---:|
| 19 | `replace(old, new)` | Replaces first match | `"Hello".replace("l", "x")` | `"Hexlo"` |
| 20 | `replaceAll(old, new)` | Replaces all matches | `"Hello".replaceAll("l", "x")` | `"Hexxo"` |
| 21 | `replace(regex, new)` | Replaces using regex | `"abc123".replace(/\d/g, "x")` | `"abcxxx"` |
| 22 | `toLowerCase()` | Converts to lowercase | `"Hello".toLowerCase()` | `"hello"` |
| 23 | `toUpperCase()` | Converts to uppercase | `"Hello".toUpperCase()` | `"HELLO"` |
| 24 | `toLocaleLowerCase()` | Locale-aware lowercase | `"İ".toLocaleLowerCase("tr")` | `"i"` |
| 25 | `toLocaleUpperCase()` | Locale-aware uppercase | `"i".toLocaleUpperCase("tr")` | `"İ"` |
| 26 | `concat(str2, str3...)` | Joins two or more strings | `"Hello".concat(" ", "World")` | `"Hello World"` |

---

## 5. Trimming & Padding

| # | Method | Description | Example | Output |
|:---:|:---|:---|:---|:---:|
| 27 | `trim()` | Removes whitespace from both ends | `"  hi  ".trim()` | `"hi"` |
| 28 | `trimStart()` / `trimLeft()` | Removes whitespace from start | `"  hi  ".trimStart()` | `"hi  "` |
| 29 | `trimEnd()` / `trimRight()` | Removes whitespace from end | `"  hi  ".trimEnd()` | `"  hi"` |
| 30 | `padStart(targetLength, padStr)` | Pads from start | `"5".padStart(3, "0")` | `"005"` |
| 31 | `padEnd(targetLength, padStr)` | Pads from end | `"5".padEnd(3, "0")` | `"500"` |

---

## 6. Repetition & Concatenation

| # | Method | Description | Example | Output |
|:---:|:---|:---|:---|:---:|
| 32 | `repeat(count)` | Repeats string `count` times | `"Hi".repeat(3)` | `"HiHiHi"` |

---

## 7. Testing & Checking

| # | Method | Description | Example | Output |
|:---:|:---|:---|:---|:---:|
| 33 | `localeCompare(str)` | Compares two strings | `"a".localeCompare("b")` | `-1` |

---

## 8. Conversion

| # | Method | Description | Example | Output |
|:---:|:---|:---|:---|:---:|
| 34 | `toString()` | Returns string representation | `(123).toString()` | `"123"` |
| 35 | `valueOf()` | Returns primitive string value | `new String("hi").valueOf()` | `"hi"` |
| 36 | `String.raw\`...\`` | Returns raw string (template literal) | ``String.raw`\n`` | `"\n"` (literal) |

---

## 9. Quick Practice Snippets

### ACCESS & EXTRACTION
```javascript
"JavaScript".charAt(4);                // "S"
"JavaScript".slice(0, 4);              // "Java"
"JavaScript".substring(4);             // "Script"
"JavaScript".substr(4, 6);             // "Script"
"Hello".at(-1);                        // "o" (last char)
"Hello".length;                        // 5
```

### SEARCHING
```javascript
"Hello World".includes("World");       // true
"Hello World".startsWith("Hel");       // true
"Hello World".endsWith("rld");         // true
"Hello World".indexOf("o");            // 4
"Hello World".lastIndexOf("o");        // 7
"abc123".search(/\d/);                 // 3
"abc123".match(/\d+/);                 // ["123"]
```

### MODIFICATION
```javascript
"Hello World".replace("World", "JS");  // "Hello JS"
"Hello World".replaceAll("l", "L");    // "HeLLo WorLd"
"Hello World".toUpperCase();           // "HELLO WORLD"
"Hello World".toLowerCase();           // "hello world"
```

### TRIMMING & PADDING
```javascript
"  hello  ".trim();                    // "hello"
"  hello  ".trimStart();               // "hello  "
"  hello  ".trimEnd();                 // "  hello"
"5".padStart(3, "0");                  // "005"
"5".padEnd(3, "0");                   // "500"
```

### SPLITTING & JOINING
```javascript
"a,b,c".split(",");                    // ["a", "b", "c"]
"Hi".repeat(3);                        // "HiHiHi"
"Hello".concat(" ", "World");         // "Hello World"
```

### CHECKING & COMPARING
```javascript
"test".localeCompare("test");          // 0 (equal)
"a".localeCompare("b");                // -1 (a comes before b)
"b".localeCompare("a");                // 1 (b comes after a)
```

---

## Pro Tips

| Tip | Details |
|:---|:---|
| **Immutability** | Strings in JavaScript are immutable. Methods like `replace()`, `toUpperCase()`, etc., return a new string rather than modifying the original. |
| **Chaining** | You can chain string methods together: `" Hello ".trim().toUpperCase()` returns `"HELLO"`. |
| **Template Literals** | For complex concatenation, prefer template literals over `concat()`: `` `Hello ${name}` ``. |
| **Performance** | For repeated concatenation in loops, consider using an array with `join()` or template literals instead of repeated `+` or `concat()`. |

---

*Happy Coding!*  
*Created for quick reference and practice.*
