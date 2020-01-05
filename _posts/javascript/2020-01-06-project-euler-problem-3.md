---
title: Project Euler - Problem 3 - Largest prime factor
layout: note
image: /assets/img/posts/project-euler.jpg
description: What is the largest prime factor of the given number?
category: javascript
tags:
- ProjectEuler100
- javascript
- ProjectEuler
---

## The problem
This is [problem 3](https://projecteuler.net/problem=3) from the [Project Euler](https://projecteuler.net/).

> The prime factors of 13195 are 5, 7, 13 and 29.
> What is the largest prime factor of the given number?

---

## First of all, what is a prime number?

According to [Wikipedia](https://en.wikipedia.org/wiki/Prime_number):
> prime numbers are the natural numbers greater than one that are not products of two smaller natural numbers.

And from [Fact Monster](https://www.factmonster.com/math-science/mathematics/prime-numbers-facts-examples-table-of-all-up-to-1000):
> A prime number can be divided, without a remainder, only by itself and by 1. For example, 17 can be divided only by 17 and by 1.

## Let's begin

Initialise variables and common functions:
```
// list of numbers we wanna test
var test_values = [2, 3, 5, 7, 13195, 600851475143];

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
```

## Attempt #1: for-loop, divide number check reminder

Since all even numbers can be divided by 2, we shall return `2` for every even `input number`. That's the easy part.

When the `input number` is an odd number, we need to do some division to check for whole numbers.

A prime number cannot be formed by multiplying two smaller whole numbers, so we divide the odd numbers `i` to check if the division produces any reminder (decimal values).

If dividing odd number `i` result in a value with a reminder, `i` is not a prime number to the `input number`.

If dividing odd number `i` is a whole number, then `i` is one of the prime numbers for `input number`.

```
function largestPrimeFactor(number) {

  // only even prime number is 2. All other even numbers can be divided by 2.
  if(number%2===0){
    return 2;
  }

  // test the odd numbers, greater than 3
  var list_of_prime_numbers = [];
  var i = 3;

  // check the division of the input number and i variable
  // if division no reminder, it is one of the prime numbers
  // if not, increase i by 2 to test the next odd number
  while(number != 1){
    if(number % i === 0){
      number /= i;
      list_of_prime_numbers.push(i);
    }else{
      i+=2; // increase by 2 to test the next odd number
    }
  }

  // return the last prime value
  return list_of_prime_numbers[list_of_prime_numbers.length-1];
}

run_function(largestPrimeFactor, test_values);

```

The output:
```
Test value: 2
Output: 2
Took 0.0949999998738349 ms

Test value: 3
Output: 3
Took 0.019999999949504854 ms

Test value: 5
Output: 5
Took 0.06500000017695129 ms

Test value: 7
Output: 7
Took 0.030000000151630957 ms

Test value: 13195
Output: 29
Took 0.02500000027794158 ms

Test value: 600851475143
Output: 6857
Took 0.2799999997478153 ms
```

---

Here's my solution, can it be any better?

This is my [Project Euler Challenge](https://projecteuler.net/) journey; anyone wants to do this together? It will be fun and we can learn a thing or two by solving this problem in different ways.
