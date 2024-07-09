# Implementation of Dynamic Programming in Javascript

Dynamic programming is a technique used in mathematics and computer science to address complicated issues by splitting them into smaller subproblems. The primary idea is to eliminate repetitive calculations by saving subproblem results and reusing them as needed. This method can drastically lower the computing cost of tackling certain kinds of issues.

## Key Concepts of Dynamic Programming

&#10687; **Optimal Substructure** &#8227; A problem has optimal substructure if the optimal solution can be derived from the optimal solutions of its subproblems. For example, the shortest path in a graph has an optimal substructure because the shortest path from A to C via B is the sum of the shortest paths from A to B and from B to C.

&#10687; **Overlapping Subproblems** &#8227; An issue has overlapping subproblems if its subproblems can be reused several times. For example, the Fibonacci sequence solves the same subproblems (Fibonacci numbers) repeatedly.

## Two Main Approaches

### &#8269; Memoization (Top-Down Appraoch)

&#10687; This includes solving the problem recursively and storing the solutions to subproblems in a data structure (such as a dictionary or array).

&#10687; When a subproblem occurs again, the previously saved result is used rather than calculated again.

&#10687; For example, in the Fibonacci sequence, if we have already computed `Fib(5)`, we save it and use it when `Fib(5)` is required again.

### &#8269; Tabulation (Bottom-Up Appraoch)

&#10687; This means solving the problem iteratively, beginning with the simplest subproblems and progressing to the solution of the primary problem.

&#10687; A table (typically an array) is used to store the results of subproblems in a bottom-up approach.

&#10687; For example, in the Fibonacci sequence, we start by computing Fib(1) and Fib(2) and then utilize these findings to compute Fib(3), Fib(4), and so on, until we reach the required Fibonacci number.

## Why Dynamic Programming Exists?

Dynamic programming exists to improve the speed of algorithms that would otherwise be costly to compute cause of redundant calculations. The temporal complexity of these algorithms is reduced via dynamic programming, which stores and reuses the results of subproblems.

## When to Use Dynamic Programming?

Dynamic programming is particularly useful for problems that:

&#10687; Have an optimal substructure

&#10687; Have overlapping subproblems

&#10687; Require optimization (e.g., finding the minimum or maximum value).

## Advantages & Disadvantages

### &#8269; Advantages

&#10687; Efficiency &#8227; Significantly reduces the time-based complexity of solving problems with overlapping subproblems.

&#10687; Clarity &#8227; Offers an organized method to handling complex challenges.

### &#8269; Disadvantages

&#10687; Space Complexity &#8227; Storing the results of subproblems can demand a significant amount of memory, particularly for big input sizes.

&#10687; Initial Overhead &#8227; Setting up the memoization table or array can add some initial overhead.
