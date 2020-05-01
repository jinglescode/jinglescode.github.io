---
title: Project Euler - Problem 4 - Largest palindrome product
layout: note
image: /assets/img/posts/project-euler.webp
description: Find the largest palindrome made from the product of two `n`-digit numbers.
category: programming
tags:
- javascript
- algorithm
---

## The problem
This is [problem 4](https://projecteuler.net/problem=4) from the [Project Euler](https://projecteuler.net/).

> A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

> Find the largest palindrome made from the product of two `n`-digit numbers.

## A palindromic number?

This number must be the same number reversed. We will...
- extract the last digit
- multiply `reversed` number by 10 to shift left by 1
- add the extracted digit to `reversed`
- remove the last digit from `temp`

```
function is_palindrome(initial_number) {
  console.log('initial_number:',initial_number)
  var reversed = 0;
  var temp = initial_number;
  while (temp > 0) {
    var last_digit = temp % 10; // extract the last digit
    reversed = reversed * 10 + last_digit; // add last digit
    temp = parseInt(temp / 10); // remove last digit
    console.log(temp, reversed)
  }
  console.log('initial_number === reversed', initial_number, reversed, initial_number === reversed)
  console.log()
  return initial_number === reversed;
}

is_palindrome(9009)
is_palindrome(123321)
is_palindrome(123456)
```

Output:
```
initial_number: 9009
900 9
90 90
9 900
0 9009
initial_number === reversed 9009 9009 true

initial_number: 123321
12332 1
1233 12
123 123
12 1233
1 12332
0 123321
initial_number === reversed 123321 123321 true

initial_number: 123456
12345 6
1234 65
123 654
12 6543
1 65432
0 654321
initial_number === reversed 123456 654321 false
```

## Thinking process...

The largest `2` digit number is `99`, and the largest `3` digit number is `999`, so we can get the largest number with 10^n -1.

Likewise, we can get the smallest `n` digit number with 10^n-1.

## Let's begin

Initialise variables and common functions:
```
// list of numbers we wanna test
var test_values = [2, 3];

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

// is_palindrome function to check number
function is_palindrome(initial_number) {
  var reversed = 0;
  var temp = initial_number;
  while (temp > 0) {
    var last_digit = temp % 10; // extract the last digit
    reversed = reversed * 10 + last_digit; // add last digit
    temp = parseInt(temp / 10); // remove last digit
  }
  return initial_number === reversed;
}
```

## Attempt #1: brute force approach, not good

The idea is simple, 2 for-loops from the largest to smallest number, and compare every possible multiplication...
- 999 * 999
- 999 * 998
- 999 * 997
- ...
- 999 * 100
- 998 * 998
- 998 * 997
- ...
- 998 * 100
- ...
- 100 * 100

### Tweaks to reduce computation

1. We will break out of the inner loop when we find a palindrome number. Because that will be the largest palindrome number for that outer loop.

2. In order not to multiply values that will be smaller than the current largest palindrome number, we update the `smallest_number` to current `inner_i` value to reduce the number of computation.

```
function largestPalindromeProduct(n) {
  return brute_force(n)
}

// the brute force approach, by for loop
function brute_force(n){
  var largest_number = Math.pow(10, n) -1;
  var smallest_number = Math.pow(10, (n-1));
  var largest_palindrome = 0;

  for(var outer_i=largest_number; outer_i>smallest_number; outer_i--){
    for(var inner_i=outer_i; inner_i>smallest_number; inner_i--){
      var number = outer_i * inner_i;
      if(is_palindrome(number) && number>largest_palindrome){
        largest_palindrome = number;
        if(inner_i>smallest_number){
          smallest_number = inner_i;
        }
        break;
      }
    }
  }
  return largest_palindrome;
}

run_function(largestPalindromeProduct, test_values);
```

Output:
```
Test value: 2
Output: 9009
Took 50.149999995483086 ms

Test value: 3
Potential infinite loop detected on line 39. Tests may fail if this is not changed.
Output: 906609
Took 103.56499999761581 ms
```

---

This is my [Project Euler Challenge](https://projecteuler.net/) journey; anyone wants to do this together? It will be fun and we can learn a thing or two by solving this problem in different ways.

---

# Full Code

<script src="https://gist.github.com/jinglescode/4c40443a80d34056b0b1a879cf7e907e.js"></script>
