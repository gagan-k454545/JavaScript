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
- [Operator Precedence](#operator-precedence)

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

#### 7. **Conditional Logic:**
```javascript
let age = 25;
let message = age >= 18 ? (age >= 65 ? "Senior" : "Adult") : "Minor";
console.log(message);
// Answer: "Adult"
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

**3. Common Mistakes to Avoid**
- Confusing pre/post increment behavior
- Forgetting operator precedence rules
- Missing `break` statements in switch cases
- Using `==` instead of `===`

**4. Show Your Knowledge**
- Mention JavaScript's dynamic typing
- Discuss best practices
- Suggest improvements to code examples

**5. Be Prepared for Follow-ups**
- "How would you refactor this code?"
- "What are the performance implications?"
- "How would you handle edge cases?"

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
```

---

## Solutions to Practice Problems

**Problem 1 Solution:**
```javascript
let a = 5, b = 10;
a = a + b;  // a = 15
b = a - b;  // b = 5
a = a - b;  // a = 10
```

**Problem 2 Solution:**
```javascript
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}
```

**Problem 3 Solution:**
```javascript
let x = 1;
let result = ++x + x++ + --x + x--;
// Step by step:
// ++x: x becomes 2, returns 2
// x++: returns 2, then x becomes 3
// --x: x becomes 2, returns 2
// x--: returns 2, then x becomes 1
// result = 2 + 2 + 2 + 2 = 8
// Final: result = 8, x = 1
```

---

*Good luck with your interviews! Keep practicing and stay confident! 🚀*
