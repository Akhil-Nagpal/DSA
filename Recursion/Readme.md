# Recursion In Javascript

Recursion is a programming method in which a function calls itself to work through an issue. It is divided into two main sections:

&#10687; **Base Case** &#8227; The circumstance in which the function stops from calling itself to avoid an endless loop. This is the problem's smallest and most basic example.

&#10687; **Recursive Case** &#8227; The section of the function that calls itself using the smaller instances of the problem after breaking it down into smaller ones.

### Example &#8227;

For example, utilizing recursion to calculate a number's factorial is defined as:

&#10687; Base Case &#8227; if _n_ is 0 then return 1

&#10687; Recursive Case &#8227; Until if _n_ > 0 then return _n_ &times; factorial(_n_ &minus; 1)

### Here is the Code &#8227;

```javascript
function factorial(n) {
  // Base Case -> if n = 0
  if (n === 0) {
    return 1;
  }

  //   Recursive Case if n != 0 then return factorial
  return n * factorial(n - 1);
}

factorial(5); // Output: 120
```

### Visualization using stack &#8227;

![Screenshot Recursion Using Stack](../assets/Recursion%20using%20stack.png)

### Visulaization using tree &#8227;

![Screenshot Recursion using tree](../assets/Recursion%20using%20tree.png)

### Why use Recursion?

&#10687; **Simplifies Complex Problems** &#8227; Recursion breaks down the complex tasks into smaller easier sub-tasks.

&#10687; **Elegant Code** &#8227; results in code that is frequently shorter and easier to read.

&#10687; **Natural Fit** &#8227; Perfect for naturally recursive tasks like divide-and-conquer algorithms and tree traversals.

## Directed & Indirected Recursion

### Directed Recursion

When a function calls itself directly, it is referred to as direct recursion. This is the simplest variant of recursion.

### Example &#8227;

Here is the same example as the one I gave above.

```javascript
function factorial(n) {
  // Base Case -> if the factorial hits 0 then return 1
  if (n === 0) {
    return 1;
  }

  //   Recursive Case
  return n * factorial(n - 1);
}
```

### Indirected Recursion

When a function calls another function, which then calls the original function, this is known as indirect recursion. A loop of function calls is produced by this.

### Example &#8227;

```javascript
function isEven(n) {
  if (n === 0) {
    return true; // Base case
  }
  return isOdd(n - 1); // Indirect recursive call
}

function isOdd(n) {
  if (n === 0) {
    return false; // Base case
  }
  return isEven(n - 1); // Indirect recursive call
}

console.log(isEven(4)); // Output: true
console.log(isOdd(3)); // Output: true
```
