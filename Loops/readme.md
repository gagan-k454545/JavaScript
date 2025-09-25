# JavaScript Loops - Complete Guide 🔄

## Table of Contents
- [What are Loops?](#what-are-loops)
- [Types of Loops](#types-of-loops)
- [For Loop](#for-loop)
- [While Loop](#while-loop)
- [Do-While Loop](#do-while-loop)
- [For...of Loop](#forof-loop)
- [For...in Loop](#forin-loop)
- [Loop Control Statements](#loop-control-statements)
- [Common Patterns](#common-patterns)
- [Practice Problems](#practice-problems)
- [Interview Questions](#interview-questions)

---

## What are Loops?

Loops are used to **execute a piece of code again and again** until a certain condition is met. They help us avoid writing repetitive code and make our programs more efficient.

### Why Use Loops?
- Avoid code repetition
- Execute code multiple times
- Process collections of data
- Create interactive programs

---

## Types of Loops

| Loop Type | Use Case | When to Use |
|-----------|----------|-------------|
| `for` | Known number of iterations | Counter-based repetition |
| `while` | Unknown iterations, condition-based | Pre-condition checking |
| `do-while` | Execute at least once | Post-condition checking |
| `for...of` | Iterate over values | Strings, Arrays, Iterables |
| `for...in` | Iterate over keys/properties | Objects, Array indices |

---

## For Loop

The **most commonly used loop** when you know exactly how many times you want to repeat code.

### Syntax
```javascript
for (initialization; condition; increment/decrement) {
    // code to be executed
}
```

### Basic Example
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

**Output:**
```
0
1
2
3
4
```

### Detailed Example with Continue
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip iteration when i equals 5
    }
    console.log(i);
}
console.log("Loop ended");
```

**Output:**
```
0
1
2
3
4
6
7
8
9
Loop ended
```

### Practical Example: Sum of Natural Numbers
```javascript
let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i; // sum = sum + i
}

console.log("Sum of first " + n + " natural numbers is " + sum);
```

**Output:**
```
Sum of first 5 natural numbers is 15
```

**Explanation:** 1 + 2 + 3 + 4 + 5 = 15

---

## While Loop

Executes code **as long as a condition is true**. Best when you don't know exactly how many iterations you need.

### Syntax
```javascript
while (condition) {
    // code to be executed
    // don't forget to update the condition variable!
}
```

### Example
```javascript
let j = 1;
let n = 5;

while (j <= n) {
    console.log(j);
    j++; // Very important! Without this, infinite loop
}
```

**Output:**
```
1
2
3
4
5
```

### ⚠️ Infinite Loop Warning
```javascript
// DON'T DO THIS - Infinite Loop!
let i = 1;
while (i <= 5) {
    console.log(i);
    // Missing i++ causes infinite loop!
}
```

---

## Do-While Loop

Executes code **at least once**, then continues while condition is true. The condition is checked **after** each execution.

### Syntax
```javascript
do {
    // code to be executed
} while (condition);
```

### Example
```javascript
let k = 1;
let n = 5;

do {
    console.log(k);
    k++;
} while (k <= n);
```

**Output:**
```
1
2
3
4
5
```

### Key Difference: Executes At Least Once
```javascript
let x = 10;

// This will print 10 even though condition is false
do {
    console.log(x); // Prints: 10
    x++;
} while (x <= 5);

// Regular while loop wouldn't execute at all
let y = 10;
while (y <= 5) {
    console.log(y); // This never executes
    y++;
}
```

---

## For...of Loop

Used to iterate over **values** of iterable objects (strings, arrays, etc.).

### Syntax
```javascript
for (let value of iterable) {
    // code to be executed
}
```

### Example with String
```javascript
let str = "hello";

for (let char of str) {
    console.log(char);
}
```

**Output:**
```
h
e
l
l
o
```

### Example with Array
```javascript
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

**Output:**
```
apple
banana
orange
```

---

## For...in Loop

Used to iterate over **keys/properties** of objects or **indices** of arrays.

### Syntax
```javascript
for (let key in object) {
    // code to be executed
}
```

### Example with Object
```javascript
let obj = {
    name: "john",
    age: 30,
    city: "new york"
};

for (let key in obj) {
    console.log('Key:', key, 'Value:', obj[key]);
}
```

**Output:**
```
Key: name Value: john
Key: age Value: 30
Key: city Value: new york
```

### Example with Array (Gets Indices)
```javascript
let colors = ["red", "green", "blue"];

for (let index in colors) {
    console.log('Index:', index, 'Value:', colors[index]);
}
```

**Output:**
```
Index: 0 Value: red
Index: 1 Value: green
Index: 2 Value: blue
```

---

## Loop Control Statements

### `break` - Exit Loop Completely
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit loop when i equals 5
    }
    console.log(i);
}
console.log("Loop ended");
```

**Output:**
```
0
1
2
3
4
Loop ended
```

### `continue` - Skip Current Iteration
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip when i equals 5
    }
    console.log(i);
}
```

**Output:**
```
0
1
2
3
4
6
7
8
9
```

---

## Common Patterns

### 1. Counting Up
```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### 2. Counting Down
```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

### 3. Step by 2 (Even Numbers)
```javascript
for (let i = 2; i <= 20; i += 2) {
    console.log(i); // 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
}
```

### 4. Step by 3
```javascript
for (let i = 3; i <= 30; i += 3) {
    console.log(i); // 3, 6, 9, 12, 15, 18, 21, 24, 27, 30
}
```

---

## Practice Problems

### 1. Print All Even Numbers from 1 to 100
```javascript
// Method 1: Using increment by 2
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// Method 2: Using modulo operator
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

### 2. Number Guessing Game
```javascript
let attempts = 1;
let gameNum = 55;
let input;

do {
    input = parseInt(prompt("Enter a number: "));
    
    if (input > gameNum) {
        console.log("Enter a smaller number. Attempt:", attempts);
    } else if (input < gameNum) {
        console.log("Enter a larger number. Attempt:", attempts);
    } else if (input === gameNum) {
        console.log("Perfect! You guessed it in", attempts, "attempts!");
    }
    
    attempts++;
} while (input !== gameNum);
```

### 3. Multiplication Table
```javascript
let number = 7;

console.log(`Multiplication table of ${number}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
```

**Output:**
```
Multiplication table of 7:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

### 4. Factorial Calculation
```javascript
let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(`Factorial of ${n} is ${factorial}`);
```

**Output:**
```
Factorial of 5 is 120
```

### 5. Count Vowels in a String
```javascript
let str = "hello world";
let vowels = "aeiouAEIOU";
let count = 0;

for (let char of str) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log(`Number of vowels: ${count}`);
```

**Output:**
```
Number of vowels: 3
```

---

## When to Use Which Loop?

| Scenario | Best Loop | Why |
|----------|-----------|-----|
| Known iterations | `for` | Counter is built-in |
| Unknown iterations | `while` | Condition-based |
| Execute at least once | `do-while` | Post-condition check |
| Iterate string characters | `for...of` | Gets values directly |
| Iterate object properties | `for...in` | Gets keys |
| Process arrays | `for...of` | Gets values directly |
| Need array indices | `for...in` or `for` | Gets indices |

---

## Interview Questions

### 1. **What's the difference between `for...in` and `for...of`?**
- **`for...in`**: Iterates over **keys/indices**
- **`for...of`**: Iterates over **values**

```javascript
let arr = ["a", "b", "c"];

for (let i in arr) {
    console.log(i); // 0, 1, 2 (indices)
}

for (let value of arr) {
    console.log(value); // a, b, c (values)
}
```

### 2. **What's the difference between `while` and `do-while`?**
- **`while`**: Checks condition before execution (may not execute at all)
- **`do-while`**: Executes first, then checks condition (executes at least once)

### 3. **What is an infinite loop? How to avoid it?**
An infinite loop runs forever because the condition never becomes false.

**Avoid by:**
- Always update the loop variable
- Ensure the condition can become false
- Use proper increment/decrement

### 4. **What are `break` and `continue`?**
- **`break`**: Exits the loop completely
- **`continue`**: Skips current iteration, continues with next

### 5. **How do you iterate over object properties?**
Use `for...in` loop:
```javascript
for (let key in object) {
    console.log(key, object[key]);
}
```

---

## Common Mistakes to Avoid

### ❌ **Infinite Loops**
```javascript
// Wrong - infinite loop
let i = 0;
while (i < 10) {
    console.log(i);
    // Missing i++ causes infinite loop
}
```

### ❌ **Off-by-One Errors**
```javascript
// Wrong - prints 0 to 9 (10 numbers)
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Correct - prints 1 to 10 (10 numbers)
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### ❌ **Using for...in with Arrays for Values**
```javascript
let arr = ["a", "b", "c"];

// Wrong - gets indices
for (let item in arr) {
    console.log(item); // 0, 1, 2
}

// Correct - gets values
for (let item of arr) {
    console.log(item); // a, b, c
}
```

---

## Quick Reference Cheat Sheet

| Loop | Syntax | Best For |
|------|--------|----------|
| **for** | `for(init; condition; update)` | Known iterations |
| **while** | `while(condition)` | Unknown iterations |
| **do-while** | `do {} while(condition)` | Execute at least once |
| **for...of** | `for(value of iterable)` | Iterate values |
| **for...in** | `for(key in object)` | Iterate keys/properties |

### Control Statements
- **`break`**: Exit loop completely
- **`continue`**: Skip current iteration

---

## 🚀 Remember for Interviews:
1. Know when to use each loop type
2. Understand the difference between `for...in` and `for...of`
3. Always avoid infinite loops
4. Practice common loop patterns
5. Be familiar with `break` and `continue`
6. Remember that `do-while` executes at least once

Happy Coding! 🎯