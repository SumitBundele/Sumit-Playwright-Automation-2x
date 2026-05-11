# Sumit Playwright Automation 2x

A comprehensive learning repository focused on Playwright automation testing and JavaScript fundamentals.

## Overview

This repository contains educational materials and code examples for learning Playwright automation and JavaScript concepts. It's organized into chapters covering various topics from basic JavaScript to advanced automation techniques.

## Repository Structure

```
Sumit-Playwright-Automation-2x/
├── README.md
├── TestAutomation/
│   └── (Test automation related files)
├── Chapter_01_Basics/
│   ├── 01_Basics.js                             # Basic JavaScript fundamentals
│   ├── 02_Js.js                                 # JavaScript basics
│   └── 03_JS_Commands_Verify setup.js           # JavaScript commands verification
├── Chapter_02_Javascripts_Concepts/
│   ├── 05_JS_Basics.js                          # Basic JavaScript syntax and examples
│   └── Chapter_03_Identifier/
│       ├── 06_Identifier_Rules.js               # JavaScript identifier naming rules with examples
│       ├── 07_Identifier_part02.js              # Identifier naming conventions (camelCase, snake_case, PascalCase, Hungarian notation)
│       ├── 08_Comment.js                        # Comment examples in JavaScript
│       └── VS_Code_Keyboard_shortcuts.md        # Complete keyboard shortcuts reference for VS Code (Windows)
└── Chapter_04_Javascripts_Concepts_02/
    ├── 09_var_let_const.js                      # var, let, const declarations and differences
    ├── 10_functions.js                          # Function declarations and usage
    ├── 11_var_explained.js                      # Detailed explanation of var keyword
    ├── 12_let_people_love.js                    # let keyword - block scoped variable declaration
    ├── 13_Const_Explained.js                    # const keyword - immutable variable declaration
    ├── 14_var_functionscope.js                  # var function scope behavior
    ├── 15_let_scope.js                          # let block scope behavior
    ├── 16_hoisting_concept.js                   # JavaScript hoisting mechanism
    └── 17_hoisting_function.js                  # Function hoisting concepts
```

## Contents

### JavaScript Fundamentals (Chapter 1-3)

- **05_JS_Basics.js**: Covers fundamental JavaScript concepts and syntax
- **06_Identifier_Rules.js**: Explains identifier naming rules with valid and invalid examples
- **07_Identifier_part02.js**: Demonstrates different naming conventions:
  - camelCase
  - snake_case
  - PascalCase
  - UPPER_SNAKE_CASE
  - Hungarian notation
- **08_Comment.js**: Examples of single-line and multi-line comments

### Advanced JavaScript Concepts (Chapter 4)

- **09_var_let_const.js**: Comparison and examples of var, let, and const declarations
- **10_functions.js**: Function declaration and usage patterns
- **11_var_explained.js**: Detailed explanation of var keyword behavior
- **12_let_people_love.js**: let keyword - block scoped variable declaration with examples
- **13_Const_Explained.js**: const keyword - immutable variable declaration
- **14_var_functionscope.js**: var function scope and global scope behavior
- **15_let_scope.js**: let block scope demonstration
- **16_hoisting_concept.js**: JavaScript hoisting mechanism explained
- **17_hoisting_function.js**: Function hoisting concepts and behavior

### VS Code Resources

- **VS_Code_Keyboard_shortcuts.md**: Comprehensive keyboard shortcuts reference for Windows, organized by categories:
  - General
  - File Management
  - Editing
  - Selection
  - Search & Replace
  - Navigation
  - View Management
  - Terminal
  - Debug

## Key Concepts Covered

### Variable Declaration
- **var**: Function-scoped, can be redeclared and reassigned, hoisted with undefined
- **let**: Block-scoped, cannot be redeclared but can be reassigned, hoisted but not initialized
- **const**: Block-scoped, cannot be redeclared or reassigned, must be initialized at declaration

### Hoisting
JavaScript hoisting moves variable and function declarations to the top of their scope during compilation, allowing them to be used before they are declared in the code.

### Scope
- Function scope (var)
- Block scope (let, const)
- Global scope
- Local scope
  - Code Actions

## Features

- **Well-organized**: Code organized into logical chapters and sections
- **Beginner-friendly**: Clear examples with comments explaining concepts
- **Practical**: Real-world coding conventions and best practices
- **Reference material**: Quick lookup guides like keyboard shortcuts

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/SumitBundele/Sumit-Playwright-Automation-2x.git
   ```

2. Navigate to the project:
   ```bash
   cd Sumit-Playwright-Automation-2x
   ```

3. Review the files in the relevant chapters based on your learning needs

## JavaScript Identifier Rules (Quick Reference)

- Must start with a letter, underscore `_`, or dollar sign `$`
- Cannot start with a digit
- Can contain letters, digits, underscores, and dollar signs
- Case-sensitive
- Cannot include spaces or punctuation
- Cannot be a reserved JavaScript keyword
- Unicode letters are supported

## Recommended Naming Conventions

- **Variables**: camelCase (e.g., `userName`, `totalPrice`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_COUNT`, `MIN_VALUE`)
- **Classes**: PascalCase (e.g., `UserProfile`, `DataHandler`)
- **Functions**: camelCase (e.g., `calculateTotal()`, `validateInput()`)

## Requirements

- Node.js (optional, for running JavaScript files)
- VS Code (recommended for best experience with keyboard shortcuts)
- Playwright (for automation testing chapters)

## VS Code Settings

This repository uses the following VS Code setting:
- `"editor.formatOnSave": true` - Automatically format code on save

## License

This is an educational repository created for learning purposes.

## Author

Sumit Bundele

## Contributing

Feel free to fork and contribute improvements to this learning material.

---

**Last Updated**: May 8, 2026
