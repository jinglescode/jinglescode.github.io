---
title: Project Euler - Problem 6 - Sum square difference
layout: note
image: /assets/img/posts/project-euler.webp
description: Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
category: programming
tags:
- javascript
- algorithm
---

## The problem
This is [problem 6](https://projecteuler.net/problem=6) from the [Project Euler](https://projecteuler.net/).

> The sum of the squares of the first ten natural numbers is,

> 1^2 + 2^2 + ... + 10^2 = 385

> The square of the sum of the first ten natural numbers is,

> (1 + 2 + ... + 10)^2 = 552 = 3025

> Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

> Find the difference between the sum of the squares of the first `n` natural numbers and the square of the sum.

---

## Thinking process

### square of the sum

The square of the sum of the first ten natural numbers is,

> (1 + 2 + ... + 10)^2 = 552 = 3025

Find the patterns.

```
sum_of_first_n(4) = 1+2+3+4 = 10
sum_of_first_n(6) = 1+2+3+4+5+6 = 21
sum_of_first_n(8) = 1+2+3+4+5+6+7+8 = 36
sum_of_first_n(10) = 1+2+3+4+5+6+7+8+9+10 = 55
```

I know I have to make use of the `n`.
```
sum_of_first_n(4) = (4+1)*2 = 10
sum_of_first_n(6) = (6+1)*3 = 21
sum_of_first_n(8) = (8+1)*4 = 36
sum_of_first_n(10) = (10+1)*5 = 55
```

I am seeing a pattern here, and that is:
```
sum_of_first_n(n) = (n+1)*(n/2)
```

And return as square of sum with this function:
```
function square_sum_of_first_n(n){
  return Math.pow( (n+1)*(n/2), 2);
}
```

### sum of the squares

The sum of the squares of the first ten natural numbers is,

> 1^2 + 2^2 + ... + 10^2 = 385

Find the patterns.
```
sum_of_square(2) = 5
  = 1^2 + 2^2
  = 2^2 + 1
sum_of_square(3) = 14
  = 1^2 + 2^2 + 3^2
  = 3^2 + 5
sum_of_square(4) = 30
  = 1^2 + 2^2 + 3^2 + 4^2
  = 4^2 + 14
sum_of_square(5) = 55
  = 1^2 + 2^2 + 3^2 + 4^2 + 5^2
  = 5^2 + 30
```

By looking at the additions, you can tell that we need another multiplier, having other additions is simply not enough.

After much trials, I realised it about multiplying `n` with `n+1` with `n+(n+1)`:
```
sum_of_square(2) = 5
  = (2*3 * (2+3))/6
sum_of_square(3) = 14
  = (3*4 * (3+4))/6
sum_of_square(4) = 30
  = (4*5 * (4+5))/6
sum_of_square(5) = 55
  = (5*6 * (5+6))/6
```

And we get this function:
```
function sum_of_square(n){
  return (
    (
      (n * (n+1)) *
      (n + (n+1))
    )/6)
}
```

## Combine everything

```
// list of numbers we wanna test
var test_values = [10, 20, 100];

// this function execute the code and records the time to execute
function run_function(func, test_values) {
  for(var i in test_values){
    console.log('Test value:', test_values[i]);
    var t0 = performance.now();
    console.log('Output:', func(test_values[i]));
    var t1 = performance.now();
    console.log("Took " + (t1 - t0) + " ms");
    console.log();
  }
}

function sumSquareDifference(n) {
  return square_sum_of_first_n(n) - sum_of_square(n);
}

function sum_of_square(n){
  return (
    (
      (n * (n+1)) *
      (n + (n+1))
    )/6)
}

function square_sum_of_first_n(n){
  return Math.pow( (n+1)*(n/2), 2);
}

run_function(sumSquareDifference, test_values);
```

Output:
```
Test value: 10
Output: 2640
Took 0.10000000474974513 ms

Test value: 20
Output: 41230
Took 0.03500000457279384 ms

Test value: 100
Output: 25164150
Took 0.03500000457279384 ms
```

---

This is my [Project Euler Challenge](https://projecteuler.net/) journey; anyone wants to do this together? It will be fun, and we can learn a thing or two by solving this problem in different ways.

# Full Code

<script src="https://gist.github.com/jinglescode/1407d91cfaa63137ad9f502c547195bc.js"></script>
