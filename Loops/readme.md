# JavaScript Operators and Conditional Statements

A comprehensive guide to understanding JavaScript operators and conditional statements with practical examples.

## Table of Contents

- [Comments in JavaScript](#comments-in-javascript)
- [Operators](#operators)
  - [Arithmetic Operators](#arithmetic-operators)
  - [Assignment Operators](#assignment-operators)
  - [Comparison Operators](#comparison-operators)
  - [Logical Operators](#logical-operators)
- [Conditional Statements](#conditional-statements)
  - [if...else Statement](#ifelse-statement)
  - [switch Statement](#switch-statement)
- [Loops](#loops)
  - [for Loop](#for-loop)
  - [while Loop](#while-loop)
  - [do...while Loop](#dowhile-loop)
  - [for...of Loop](#forof-loop)
  - [for...in Loop](#forin-loop)
  - [Loop Control Statements](#loop-control-statements)
  - [Practice Problems](#practice-problems)
- [Operator Precedence](#operator-precedence)

---

## Loops

Loops are used to execute a piece of code repeatedly until a certain condition is met.

### for Loop

The most commonly used loop when you know how many times you want to repeat the code.

**Syntax:**
```javascript
for (initialization; condition; increment/decrement) {
    // code to be executed
}
```

**Example:**
```javascript
// Print numbers from 0 to 99
for (let i = 0; i < 100; i++) {
    console.log(i);
}
console.log("Loop ended");
```

**Calculate sum of first n natural numbers:**
```javascript
let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i; // sum = sum + i
}

console.log("Sum of first " + n + " natural numbers is " + sum); // 15
```

### while Loop

Executes code as long as the condition is true. Use when you don't know the exact number of iterations.

**Syntax:**
```javascript
while (condition) {
    // code to be executed
    // don't forget to update the condition variable
}
```

**Example:**
```javascript
let j = 1;
let n = 5;

while (j <= n) {
    console.log(j); // prints 1, 2, 3, 4, 5
    j++;
}
```

**⚠️ Warning:** Always ensure the condition eventually becomes false to avoid infinite loops!

```javascript
// INFINITE LOOP - DON'T RUN THIS!
// for (let i = 1; i <= n; ) {
//     console.log(i); // i never changes, condition always true
// }
```

### do...while Loop

Similar to while loop, but executes the code at least once before checking the condition.

**Syntax:**
```javascript
do {
    // code to be executed
} while (condition);
```

**Example:**
```javascript
let k = 1;
let n = 5;

do {
    console.log(k); // prints 1, 2, 3, 4, 5
    k++;
} while (k <= n);
```

**Key Difference:** `do...while` runs at least once, even if condition is initially false.

```javascript
let x = 10;

// This will NOT execute
while (x < 5) {
    console.log("while: " + x);
}

// This WILL execute once
do {
    console.log("do-while: " + x);
} while (x < 5);
```

### for...of Loop

Used to iterate over iterable objects (arrays, strings, etc.). Gets the **values**.

**Syntax:**
```javascript
for (let value of iterable) {
    // code to be executed
}
```

**Example with String:**
```javascript
let str = "hello";

for (let char of str) {
    console.log(char); // prints: h, e, l, l, o
}
```

**Example with Array:**
```javascript
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit); // prints: apple, banana, orange
}
```

### for...in Loop

Used to iterate over object properties. Gets the **keys/indexes**.

**Syntax:**
```javascript
for (let key in object) {
    // code to be executed
}
```

**Example with Object:**
```javascript
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in obj) {
    console.log("Key:", key, "Value:", obj[key]);
}
// Output:
// Key: name Value: John
// Key: age Value: 30
// Key: city Value: New York
```

**Example with Array (gets indexes):**
```javascript
let arr = ["a", "b", "c"];

for (let index in arr) {
    console.log("Index:", index, "Value:", arr[index]);
}
// Output:
// Index: 0 Value: a
// Index: 1 Value: b
// Index: 2 Value: c
```

### Loop Control Statements

#### break Statement
Exits the loop immediately.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit when i equals 5
    }
    console.log(i); // prints: 0, 1, 2, 3, 4
}
```

#### continue Statement
Skips the current iteration and continues with the next one.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip when i equals 5
    }
    console.log(i); // prints: 0, 1, 2, 3, 4, 6, 7, 8, 9
}
```

### Practice Problems

#### 1. Print All Even Numbers from 1 to 100

```javascript
// Method 1: Using increment by 2
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// Method 2: Using modulus operator
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

#### 2. Number Guessing Game

```javascript
let attempts = 1;
let gameNum = 55; // The number to guess
let input;

do {
    // In browser: input = parseInt(prompt("Enter a number:"));
    // For demo purposes, let's simulate user input
    input = Math.floor(Math.random() * 100) + 1; // Random guess for demo
    
    if (input > gameNum) {
        console.log("Enter a smaller number. Attempt:", attempts);
    } else if (input < gameNum) {
        console.log("Enter a larger number. Attempt:", attempts);
    } else if (input === gameNum) {
        console.log("Your guess is perfect! Attempts:", attempts);
    }
    
    attempts++;
} while (input !== gameNum);
```

#### 3. More Practice Problems

**Print Multiplication Table:**
```javascript
let num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
```

**Count Vowels in a String:**
```javascript
let text = "Hello World";
let vowels = "aeiouAEIOU";
let count = 0;

for (let char of text) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log("Number of vowels:", count); // 3
```

**Factorial Calculator:**
```javascript
let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(`${n}! = ${factorial}`); // 5! = 120
```

### Loop Comparison Table

| Loop Type | When to Use | Key Feature |
|-----------|-------------|-------------|
| `for` | Known number of iterations | Most common, compact syntax |
| `while` | Unknown iterations, condition-based | Check condition first |
| `do...while` | At least one execution needed | Execute first, then check |
| `for...of` | Iterate over values of arrays/strings | Gets values directly |
| `for...in` | Iterate over object properties | Gets keys/indexes |

---

## Comments in JavaScript

Comments are used to add explanations to your code and are ignored during execution.

### Single Line Comments
```javascript
// This is a single line comment
console.log("Hello World"); // Comment at end of line
```

### Multi-line Comments
```javascript
/* 
   This is a multi-line comment
   It can span multiple lines
   Very useful for longer explanations
*/
```

---

## Operators

### Arithmetic Operators

These operators perform mathematical operations on numbers.

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `+` | Addition | `10 + 5` | `15` |
| `-` | Subtraction | `10 - 5` | `5` |
| `*` | Multiplication | `10 * 5` | `50` |
| `/` | Division | `10 / 5` | `2` |
| `%` | Modulus (Remainder) | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |

```javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0 (10 divided by 5 = 2 remainder 0)
console.log(a ** b); // 100000 (10 to the power of 5)
```

#### Increment and Decrement Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `++` | Increment by 1 | `x++` or `++x` |
| `--` | Decrement by 1 | `x--` or `--x` |

**Pre-increment vs Post-increment:**
- `++x` (pre-increment): Increments first, then returns the value
- `x++` (post-increment): Returns the value first, then increments

```javascript
let c = 0;

// Post-increment examples
console.log(c++); // 0 (returns 0, then c becomes 1)
console.log(c++); // 1 (returns 1, then c becomes 2)
console.log(c);   // 2

// Pre-increment examples
let d = 0;
console.log(++d); // 1 (increments to 1, then returns 1)
console.log(++d); // 2 (increments to 2, then returns 2)
```

### Assignment Operators

These operators assign values to variables.

| Operator | Description | Example | Equivalent |
|----------|-------------|---------|------------|
| `=` | Assignment | `x = 5` | - |
| `+=` | Add and assign | `x += 3` | `x = x + 3` |
| `-=` | Subtract and assign | `x -= 3` | `x = x - 3` |
| `*=` | Multiply and assign | `x *= 3` | `x = x * 3` |
| `/=` | Divide and assign | `x /= 3` | `x = x / 3` |
| `%=` | Modulus and assign | `x %= 3` | `x = x % 3` |
| `**=` | Exponent and assign | `x **= 3` | `x = x ** 3` |

```javascript
let d = 10;

d += 5;  // d = d + 5  → d = 15
d -= 5;  // d = d - 5  → d = 10
d *= 5;  // d = d * 5  → d = 50
d /= 5;  // d = d / 5  → d = 10
d %= 3;  // d = d % 3  → d = 1
d **= 3; // d = d ** 3 → d = 1
```

### Comparison Operators

These operators compare two values and return a boolean result.

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `==` | Equal (value only) | `10 == '10'` | `true` |
| `===` | Strict equal (value and type) | `10 === '10'` | `false` |
| `!=` | Not equal (value only) | `10 != '10'` | `false` |
| `!==` | Strict not equal (value and type) | `10 !== '10'` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `10 < 5` | `false` |
| `>=` | Greater than or equal | `10 >= 10` | `true` |
| `<=` | Less than or equal | `10 <= 5` | `false` |

```javascript
let e = 10;
let f = '10'; // String '10'

console.log(e == f);  // true  (compares values only)
console.log(e === f); // false (compares values AND types)
console.log(e != f);  // false (values are equal)
console.log(e !== f); // true  (types are different)
```

**Important:** Always use `===` and `!==` for safer comparisons!

### Logical Operators

These operators work with boolean values.

| Operator | Name | Description | Example |
|----------|------|-------------|---------|
| `&&` | AND | Returns true if both operands are true | `true && false` → `false` |
| `\|\|` | OR | Returns true if at least one operand is true | `true \|\| false` → `true` |
| `!` | NOT | Returns the opposite boolean value | `!true` → `false` |

```javascript
let g = true;
let h = false;

console.log(g && h); // false (both must be true)
console.log(g || h); // true  (at least one is true)
console.log(!g);     // false (opposite of true)
console.log(!h);     // true  (opposite of false)
```

---

## Conditional Statements

### if...else Statement

Execute different code blocks based on conditions.

```javascript
let age = 18;

if (age < 18) {
    console.log("You are a minor");
} else if (age === 18) {
    console.log("You are now an adult");
} else {
    console.log("You are an adult");
}
```

**Structure:**
- `if` - executes if condition is true
- `else if` - executes if previous conditions are false and this condition is true
- `else` - executes if all previous conditions are false

### switch Statement

Execute different code blocks based on the value of a variable.

```javascript
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
```

**Important:** Always use `break` statements to prevent fall-through behavior!

---

## Operator Precedence

Operators are evaluated in a specific order (highest to lowest priority):

1. **`()`** - Parentheses (highest priority)
2. **`**`** - Exponentiation
3. **`*`, `/`, `%`** - Multiplication, Division, Modulus
4. **`+`, `-`** - Addition, Subtraction (lowest priority)

```javascript
let result = 2 + 3 * 4;        // Result: 14 (not 20)
let result2 = (2 + 3) * 4;     // Result: 20

console.log(result);  // 14
console.log(result2); // 20
```

**Tip:** Use parentheses to make your intentions clear and override default precedence!

---

## Best Practices

1. **Use strict equality (`===`)** instead of loose equality (`==`)
2. **Always use `break` statements** in switch cases
3. **Use parentheses** to clarify complex expressions
4. **Write clear comments** to explain complex logic
5. **Use meaningful variable names** for better readability

---

## Interactive Examples

Try running these examples in your browser console or Node.js environment to see the results!

```javascript
// Quick test
let x = 5;
let y = "5";

console.log("Loose equality:", x == y);   // true
console.log("Strict equality:", x === y); // false
console.log("Logical AND:", true && false); // false
console.log("Logical OR:", true || false);  // true
```

---

## Interview Tips & Common Questions 🎯

### Key Points to Remember for Interviews

**1. Understand the Difference Between `==` and `===`**
- This is one of the most commonly asked questions
- Always prefer `===` for safer code
- Be able to explain type coercion

**2. Master Increment/Decrement Operators**
- Understand pre-increment vs post-increment
- Practice tricky expressions with multiple operators
- Know how they affect the original variable

**3. Operator Precedence Knowledge**
- Memorize the basic precedence rules
- Use parentheses when in doubt
- Be able to evaluate complex expressions step by step

**4. Logical Operators Behavior**
- Understand short-circuit evaluation
- Know truthy and falsy values in JavaScript
- Practice combining multiple logical operators

### Common Interview Questions

#### 1. **What's the output?**
```javascript
let a = 5;
console.log(++a + a++ + a);
// Answer: 6 + 6 + 7 = 19
```

#### 2. **Explain the difference between `==` and `===`**
```javascript
console.log(0 == false);   // true
console.log(0 === false);  // false
console.log("5" == 5);     // true
console.log("5" === 5);    // false
```
**Answer:** `==` compares values with type coercion, `===` compares both value and type without coercion.

#### 3. **What will this switch statement output?**
```javascript
let x = 2;
switch(x) {
    case 1:
        console.log("One");
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
        break;
    default:
        console.log("Default");
}
// Answer: "Two" and "Three" (no break after case 2)
```

#### 4. **Predict the output:**
```javascript
let result = 2 + 3 * 4 ** 2;
console.log(result);
// Answer: 50 (4**2 = 16, then 3*16 = 48, then 2+48 = 50)
```

#### 5. **What's the result of these logical operations?**
```javascript
console.log(true && false || true);   // true
console.log(false || true && false);  // false
console.log(!false && !true || true); // true
```

#### 6. **Tricky Assignment Question:**
```javascript
let a = 10;
a += a *= a;
console.log(a);
// Answer: 110 (a *= a makes a = 100, then a += 100 makes a = 110)
```

#### 8. **What's the output of this loop?**
```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Answer: 0, 1, 2 (let creates block scope)
```

#### 9. **Predict the behavior:**
```javascript
let arr = [1, 2, 3];
for (let i in arr) {
    console.log(typeof i);
}
// Answer: "string", "string", "string" (indexes are strings)
```

#### 10. **Loop Control Question:**
```javascript
for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) continue;
    if (i > 7) break;
    console.log(i);
}
// Answer: 1, 2, 4, 5, 7
```

#### 11. **Nested Loop Output:**
```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        if (i === 2) continue;
        console.log(i, j);
    }
}
// Answer: 1 1, 1 2, 3 1, 3 2
```

#### 12. **for...of vs for...in:**
```javascript
let arr = ['a', 'b', 'c'];
// What's the difference in output?
for (let item of arr) { console.log(item); }
for (let item in arr) { console.log(item); }
// for...of: a, b, c (values)
// for...in: 0, 1, 2 (indexes)
```

### Loop Practice Problems 💪

#### Problem 4: Nested Loop Pattern
```javascript
// Print this pattern:
// *
// **
// ***
// ****
// *****
```

#### Problem 5: Prime Number Checker
```javascript
// Write a function to check if a number is prime
function isPrime(num) {
    // Your solution here
    // Return true if prime, false otherwise
}
```

#### Problem 6: Array Sum with Conditions
```javascript
// Sum only positive numbers in an array
let numbers = [1, -2, 3, -4, 5, -6, 7];
// Expected result: 16 (1 + 3 + 5 + 7)
```

#### Problem 7: String Reversal
```javascript
// Reverse a string using loops
function reverseString(str) {
    // Your solution here
    // Don't use built-in reverse() method
}
```

### Practice Problems 💪

#### Problem 1: Variable Swapping
```javascript
// Swap two variables without using a third variable
let a = 5, b = 10;
// Your solution here
// Expected: a = 10, b = 5
```

#### Problem 2: Grade Calculator
```javascript
// Write a function that returns grade based on score
function getGrade(score) {
    // Use conditional statements
    // 90-100: A, 80-89: B, 70-79: C, 60-69: D, <60: F
}
```

#### Problem 3: Complex Expression
```javascript
// Evaluate without running the code
let x = 1;
let result = ++x + x++ + --x + x--;
// What is the final value of result and x?
```

### Interview Tips for Success 📚

**1. Think Out Loud**
- Explain your thought process
- Walk through each step of evaluation
- Don't rush to the answer

**2. Ask Clarifying Questions**
- "Should I assume this is strict mode?"
- "Are there any edge cases I should consider?"
- "Would you like me to optimize for readability or performance?"
- "Should I handle invalid inputs?"

**3. Common Mistakes to Avoid**
- Confusing pre/post increment behavior
- Forgetting operator precedence rules
- Missing `break` statements in switch cases
- Using `==` instead of `===`
- Creating infinite loops
- Confusing `for...in` with `for...of`
- Off-by-one errors in loop conditions

**4. Show Your Knowledge**
- Mention JavaScript's dynamic typing
- Discuss best practices
- Suggest improvements to code examples
- Explain time and space complexity for loops

**5. Be Prepared for Follow-ups**
- "How would you refactor this code?"
- "What are the performance implications?"
- "How would you handle edge cases?"
- "Can you optimize this loop?"

### Quick Reference Cheat Sheet 📝

```javascript
// Operator Precedence (High to Low)
// 1. ()
// 2. **
// 3. *, /, %
// 4. +, -
// 5. Comparison operators
// 6. Logical operators

// Falsy Values in JavaScript
false, 0, -0, 0n, "", null, undefined, NaN

// Truthy Values
Everything else including [], {}, "0", "false"

// Short-circuit Evaluation
true || anything   // Returns true (doesn't evaluate 'anything')
false && anything  // Returns false (doesn't evaluate 'anything')

// Loop Types Quick Reference
for: known iterations, compact syntax
while: condition-based, check first
do-while: execute at least once
for...of: iterate over values (arrays, strings)
for...in: iterate over keys/properties (objects)

// Common Loop Patterns
// Sum: accumulator += current
// Count: counter++
// Find: if(condition) return item
// Transform: newArray.push(transform(item))
```

---

## Solutions to Practice Problems

**Problem 4 Solution:**
```javascript
// Print star pattern
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
```

**Problem 5 Solution:**
```javascript
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
```

**Problem 6 Solution:**
```javascript
let numbers = [1, -2, 3, -4, 5, -6, 7];
let sum = 0;

for (let num of numbers) {
    if (num > 0) {
        sum += num;
    }
}
console.log(sum); // 16
```

**Problem 7 Solution:**
```javascript
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Alternative using for...of
function reverseString2(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}
```

---

*Good luck with your interviews! Keep practicing and stay confident! 🚀*