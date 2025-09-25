# JavaScript Strings - Complete Guide

## Table of Contents
- [What are Strings?](#what-are-strings)
- [Creating Strings](#creating-strings)
- [String Properties](#string-properties)
- [String Indexing](#string-indexing)
- [Template Literals](#template-literals)
- [Escape Characters](#escape-characters)
- [String Methods](#string-methods)
- [String Immutability](#string-immutability)
- [Common Interview Questions](#common-interview-questions)
- [Important Tips](#important-tips)
- [Best Practices](#best-practices)

## What are Strings?

A **string** is a sequence of characters used to represent text in JavaScript. Strings are one of the primitive data types in JavaScript.

```javascript
let str = 'Gagan is my name';
```

## Creating Strings

There are three ways to create strings in JavaScript:

```javascript
// Single quotes
let str1 = 'Hello World';

// Double quotes
let str2 = "Hello World";

// Template literals (backticks)
let str3 = `Hello World`;
```

## String Properties

### Length Property
The `length` property returns the number of characters in a string.

```javascript
let str = 'Gagan is my name';
console.log(str.length); // Output: 16
```

**💡 Interview Tip:** Remember that spaces count as characters!

## String Indexing

Strings are indexed starting from 0. You can access individual characters using square brackets.

```javascript
let str = 'Gagan is my name';
console.log(str[0]); // Output: 'G'
console.log(str[1]); // Output: 'a'
console.log(str[0] + str[1]); // Output: 'Ga'
```

**Key Points:**
- First character is at index 0
- Last character is at index `str.length - 1`
- Accessing invalid index returns `undefined`

## Template Literals

Template literals use backticks (`) and allow embedded expressions using `${}`.

### Basic Usage
```javascript
let name = 'Gagan';
let greeting = `My name is ${name}`;
console.log(greeting); // Output: "My name is Gagan"
```

### With Objects
```javascript
let obj = {
    item: 'ink',
    price: 203
};
console.log(`The item is ${obj.item} and price is ${obj.price}`);
// Output: "The item is ink and price is 203"
```

### With Expressions
```javascript
let a = 10;
let b = 20;
console.log(`The sum of ${a} and ${b} is ${a + b}`);
// Output: "The sum of 10 and 20 is 30"
```

**🎯 Interview Point:** Template literals support multi-line strings and expression evaluation.

## Escape Characters

Escape characters allow you to include special characters in strings.

| Escape Character | Description |
|------------------|-------------|
| `\n` | New line |
| `\t` | Tab space |
| `\"` | Double quote |
| `\'` | Single quote |
| `\\` | Backslash |

```javascript
console.log('First line\nSecond line\nThird line\ttab space');

let str1 = 'Gag\tan';
console.log(str1.length); // Output: 6 (tab counts as 1 character)
```

## String Methods

Strings have many built-in methods for manipulation. **Important:** Original string is never modified!

### Case Conversion
```javascript
let string = 'This is my string';

// Convert to uppercase
console.log(string.toUpperCase()); // "THIS IS MY STRING"

// Convert to lowercase
console.log(string.toLowerCase()); // "this is my string"

console.log(string); // Original remains: "This is my string"
```

### Whitespace Removal
```javascript
let str = '  Hello World  ';
console.log(str.trim()); // "Hello World" (removes leading/trailing spaces)
```

### Extracting Parts
```javascript
let newStr = 'Apple, Banana, Mango';
let fruit = newStr.slice(7, 13); // Extract from index 7 to 12 (13 not included)
console.log(fruit); // Output: "Banana"
```

**slice() Parameters:**
- `startIndex`: Where to start extraction
- `endIndex`: Where to end (not included)
- Negative indices count from the end

### Joining Strings
```javascript
let firstName = 'Gagan';
let lastName = 'K';
let fullName = firstName.concat(' ', lastName);
console.log(fullName); // "Gagan K"
```

### Replacing Text
```javascript
let message = 'I love JavaScript';
let newMessage = message.replace('JavaScript', 'JS');
console.log(newMessage); // "I love JS"
```

**Note:** `replace()` only replaces the first occurrence.

### Getting Characters
```javascript
let message = 'I love JavaScript';
let char = message.charAt(2);
console.log(char); // "l"
```

### Finding Positions
```javascript
let message = 'I love JavaScript';
let index = message.indexOf('love');
console.log(index); // 2
```

**indexOf() behavior:**
- Returns index of first occurrence
- Returns -1 if not found
- Case-sensitive

## String Immutability

**🔥 Critical Concept:** Strings are immutable in JavaScript!

```javascript
let string = 'This is my string';
string.toUpperCase(); // This doesn't change the original string!
console.log(string); // Still: "This is my string"

// To actually change it:
string = string.toUpperCase(); // Reassign the result
console.log(string); // Now: "THIS IS MY STRING"
```

## Practical Example

```javascript
let input = 'Gagan'; // In real apps, use prompt('Enter your name')
console.log(`@${input}${input.length}`); // Output: "@Gagan5"
```

## Common Interview Questions

### 1. **What's the difference between single quotes, double quotes, and backticks?**
- Single/double quotes: Basic string creation, functionally identical
- Backticks: Template literals with embedded expressions and multi-line support

### 2. **Are strings mutable or immutable in JavaScript?**
- **Immutable**: String methods return new strings, original is unchanged

### 3. **How do you check if a string contains a substring?**
```javascript
let str = "Hello World";
console.log(str.indexOf("World") !== -1); // true
console.log(str.includes("World")); // true (ES6+)
```

### 4. **What happens when you access an invalid string index?**
```javascript
let str = "Hello";
console.log(str[10]); // undefined
```

### 5. **How do you reverse a string?**
```javascript
let str = "Hello";
let reversed = str.split('').reverse().join('');
console.log(reversed); // "olleH"
```

## Important Tips

### 🎯 Performance Tips
- Use template literals for complex string construction
- Avoid repeated string concatenation in loops (use arrays instead)
- Use `includes()` instead of `indexOf() !== -1` for readability

### 🐛 Common Pitfalls
- Forgetting strings are immutable
- Confusing `slice()` parameters (endIndex not included)
- Case sensitivity in `indexOf()` and `replace()`

### 💡 Best Practices
- Use descriptive variable names
- Prefer template literals for interpolation
- Always handle edge cases (empty strings, null/undefined)
- Use `trim()` when processing user input

## Best Practices

```javascript
// ✅ Good
const userName = `Hello, ${name}!`;
const cleanInput = userInput.trim().toLowerCase();

// ❌ Avoid
const userName = "Hello, " + name + "!";
const messyString = "  MiXeD cAsE  ";
```

## Quick Reference

| Method | Purpose | Returns New String? |
|--------|---------|-------------------|
| `length` | Get string length | Property |
| `toUpperCase()` | Convert to uppercase | ✅ |
| `toLowerCase()` | Convert to lowercase | ✅ |
| `trim()` | Remove whitespace | ✅ |
| `slice(start, end)` | Extract substring | ✅ |
| `concat(str)` | Join strings | ✅ |
| `replace(old, new)` | Replace text | ✅ |
| `charAt(index)` | Get character at index | ✅ |
| `indexOf(substr)` | Find substring position | Number |

---

**Remember:** Master these string concepts as they're fundamental to JavaScript and frequently tested in interviews!