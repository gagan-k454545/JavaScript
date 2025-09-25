# JavaScript Arrays - Complete Guide & Interview Notes

## Table of Contents
- [What are Arrays?](#what-are-arrays)
- [Array Declaration](#array-declaration)
- [Array Properties](#array-properties)
- [Array Methods](#array-methods)
- [Mutability vs Immutability](#mutability-vs-immutability)
- [Loop Methods](#loop-methods)
- [Practical Examples](#practical-examples)
- [Interview Questions](#interview-questions)

---

## What are Arrays?

Arrays are **collection of items or elements** in JavaScript. Key characteristics:
- Data structure for storing multiple values
- Reference type (objects)
- Can hold different data types
- Zero-indexed

```javascript
// Array examples
let numbers = [1, 2, 3, 4, 5];
let schools = ["school1", "school2", "school3"];
let mixed = ["name", "age", 23, true, undefined, null, [1, 2, 3]];
```

---

## Array Declaration

### Different Ways to Create Arrays

```javascript
// 1. Array literal (most common)
let arr1 = [1, 2, 3, 4, 5];

// 2. Array constructor
let arr2 = new Array(1, 2, 3, 4, 5);

// 3. Mixed data types
let info = ["name", "age", 23, true, undefined, null, [1, 2, 3]];

// 4. Arrays in objects
let obj = {
    st1: [1, 2, 3],
    st2: [4, 5, 6],
    st3: [7, 8, 9]
};
```

---

## Array Properties

### Key Properties and Methods for Type Checking

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr.length);           // 5
console.log(typeof arr);           // "object"
console.log(Array.isArray(arr));  // true (recommended for checking)
```

---

## Array Methods

### 🔥 **Top 20 Array Methods for Interviews**

#### 1. **Mutating Methods** (Change Original Array)

| Method | Description | Example |
|--------|-------------|---------|
| `push()` | Add element(s) to end | `arr.push(6)` |
| `pop()` | Remove last element | `arr.pop()` |
| `shift()` | Remove first element | `arr.shift()` |
| `unshift()` | Add element(s) to beginning | `arr.unshift(0)` |
| `splice()` | Add/remove elements at any position | `arr.splice(2, 1, 'new')` |
| `sort()` | Sort elements | `arr.sort()` |
| `reverse()` | Reverse array order | `arr.reverse()` |

```javascript
let arr = [1, 2, 3, 4, 5];

// Adding elements
arr.push(6);        // [1, 2, 3, 4, 5, 6]
arr.unshift(0);     // [0, 1, 2, 3, 4, 5, 6]

// Removing elements
arr.pop();          // [0, 1, 2, 3, 4, 5]
arr.shift();        // [1, 2, 3, 4, 5]

// Splice: splice(startIndex, deleteCount, ...itemsToAdd)
arr.splice(2, 1);   // Remove 1 element at index 2
arr.splice(2, 0, 10, 20); // Add 10, 20 at index 2
```

#### 2. **Non-Mutating Methods** (Return New Array/Value)

| Method | Description | Returns | Example |
|--------|-------------|---------|---------|
| `slice()` | Extract portion | New array | `arr.slice(1, 3)` |
| `concat()` | Join arrays | New array | `arr1.concat(arr2)` |
| `join()` | Convert to string | String | `arr.join('-')` |
| `indexOf()` | Find index | Number | `arr.indexOf(3)` |
| `includes()` | Check existence | Boolean | `arr.includes(3)` |

```javascript
let arr = [1, 2, 3, 4, 5];

// Non-mutating operations
let sliced = arr.slice(1, 3);      // [2, 3] - original unchanged
let joined = arr.join('-');        // "1-2-3-4-5"
let index = arr.indexOf(3);        // 2
let exists = arr.includes(4);      // true
```

#### 3. **Higher-Order Methods** (Callback Functions)

| Method | Description | Returns | Example |
|--------|-------------|---------|---------|
| `forEach()` | Execute function for each | undefined | `arr.forEach(fn)` |
| `map()` | Transform elements | New array | `arr.map(x => x * 2)` |
| `filter()` | Filter elements | New array | `arr.filter(x => x > 2)` |
| `reduce()` | Reduce to single value | Any type | `arr.reduce((a,b) => a+b)` |
| `find()` | Find first match | Element | `arr.find(x => x > 3)` |
| `findIndex()` | Find first match index | Number | `arr.findIndex(x => x > 3)` |
| `every()` | Test all elements | Boolean | `arr.every(x => x > 0)` |
| `some()` | Test some elements | Boolean | `arr.some(x => x > 4)` |

```javascript
let arr = [1, 2, 3, 4, 5];

// Higher-order methods
arr.forEach(x => console.log(x));           // Prints each element
let doubled = arr.map(x => x * 2);          // [2, 4, 6, 8, 10]
let filtered = arr.filter(x => x > 3);      // [4, 5]
let sum = arr.reduce((acc, x) => acc + x, 0); // 15
let found = arr.find(x => x > 3);           // 4
let foundIndex = arr.findIndex(x => x > 3); // 3
let allPositive = arr.every(x => x > 0);    // true
let hasLarge = arr.some(x => x > 4);        // true
```

---

## Mutability vs Immutability

### 🚨 **Important Interview Concept**

```javascript
// Arrays are MUTABLE
let arr = [1, 2, 3, 4, 5];
arr[0] = 100;  // ✅ Works - array is modified
console.log(arr); // [100, 2, 3, 4, 5]

// Strings are IMMUTABLE
let str = 'hello';
str[0] = 'H';  // ❌ Doesn't work - strings are immutable
console.log(str); // "hello" (unchanged)
```

---

## Loop Methods

### Different Ways to Loop Through Arrays

```javascript
let cities = ['chennai', 'bangalore', 'hyderabad', 'pune', 'mumbai'];

// 1. for...in (gets indices)
for (let index in cities) {
    console.log(index);        // 0, 1, 2, 3, 4
    console.log(cities[index]); // chennai, bangalore, etc.
}

// 2. for...of (gets values)
for (let city of cities) {
    console.log(city);         // chennai, bangalore, etc.
}

// 3. Traditional for loop
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

// 4. forEach
cities.forEach((city, index) => {
    console.log(index, city);
});
```

---

## Practical Examples

### Example 1: Calculate Average
```javascript
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let mark of marks) {
    sum += mark;
}
let average = sum / marks.length;
console.log(average); // 66.5
```

### Example 2: Apply Discount
```javascript
let prices = [100, 200, 300, 400, 500];
let discountedPrices = [];

for (let i = 0; i < prices.length; i++) {
    let discounted = prices[i] - (prices[i] * 10 / 100);
    discountedPrices.push(discounted);
}
console.log(discountedPrices); // [90, 180, 270, 360, 450]
```

### Example 3: Fibonacci Series
```javascript
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

---

## Interview Questions

### 🎯 **Common Array Interview Questions**

#### **Q1: What's the difference between `slice()` and `splice()`?**

| Feature | `slice()` | `splice()` |
|---------|-----------|------------|
| **Mutates original** | ❌ No | ✅ Yes |
| **Returns** | New array | Removed elements |
| **Purpose** | Extract portion | Add/remove elements |
| **Syntax** | `slice(start, end)` | `splice(start, deleteCount, ...items)` |

```javascript
let arr = [1, 2, 3, 4, 5];

// slice() - doesn't change original
let sliced = arr.slice(1, 3);  // [2, 3]
console.log(arr);              // [1, 2, 3, 4, 5] - unchanged

// splice() - changes original  
let spliced = arr.splice(1, 2); // [2, 3]
console.log(arr);               // [1, 4, 5] - changed
```

#### **Q2: How to check if a variable is an array?**
```javascript
// ✅ Best method
Array.isArray(variable)

// ❌ Not reliable
typeof variable === 'object'  // Arrays are objects in JS
```

#### **Q3: What's the difference between `map()` and `forEach()`?**
```javascript
// forEach() - returns undefined, used for side effects
arr.forEach(x => console.log(x));

// map() - returns new array, used for transformation
let doubled = arr.map(x => x * 2);
```

#### **Q4: How to remove duplicates from an array?**
```javascript
// Method 1: Using Set
let unique = [...new Set(arr)];

// Method 2: Using filter
let unique2 = arr.filter((item, index) => arr.indexOf(item) === index);
```

#### **Q5: How to find max/min in array?**
```javascript
let arr = [1, 5, 3, 9, 2];

// Method 1: Math methods
let max = Math.max(...arr);  // 9
let min = Math.min(...arr);  // 1

// Method 2: reduce
let max2 = arr.reduce((a, b) => a > b ? a : b);
```

#### **Q6: Difference between `push()` and `concat()`?**
```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// push() - mutates original, adds elements
arr1.push(...arr2);  // arr1 becomes [1, 2, 3, 4, 5, 6]

// concat() - returns new array
let arr3 = arr1.concat(arr2);  // new array [1, 2, 3, 4, 5, 6]
```

---

### 🔥 **Quick Reference Cheat Sheet**

```javascript
// Creation
let arr = [1, 2, 3, 4, 5];

// Add/Remove
arr.push(6);           // Add to end
arr.unshift(0);        // Add to beginning
arr.pop();             // Remove from end
arr.shift();           // Remove from beginning

// Transform
arr.map(x => x * 2);   // Transform elements
arr.filter(x => x > 2); // Filter elements
arr.reduce((a,b) => a+b, 0); // Reduce to single value

// Search
arr.indexOf(3);        // Find index
arr.includes(3);       // Check existence
arr.find(x => x > 3);  // Find first match

// Utility
arr.slice(1, 3);       // Extract portion
arr.splice(1, 2);      // Remove/add elements
arr.join('-');         // Convert to string
arr.sort();            // Sort elements
arr.reverse();         // Reverse order
```

---

## 📝 **Key Takeaways for Interviews**

1. **Arrays are reference types** - they're objects in JavaScript
2. **Use `Array.isArray()`** to check if something is an array
3. **Mutating vs Non-mutating methods** - know which ones change the original array
4. **Higher-order functions** are powerful tools for data manipulation
5. **Understand time complexity** - most array methods are O(n)
6. **Practice common patterns** - filtering, mapping, reducing, finding duplicates

---

*Happy coding! 🚀*