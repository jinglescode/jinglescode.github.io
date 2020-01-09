---
title: Project Euler - Problem 7 - 10001st prime
layout: note
image: /assets/img/posts/project-euler.jpg
description: What is the `n`th prime number?
category: javascript
tags:
- ProjectEuler100
- javascript
- ProjectEuler
---

I am currently on this [Project Euler Challenge](https://projecteuler.net/) journey. And it is my 7^th day! Yay~💪🏻

Today's [problem 7](https://projecteuler.net/problem=7) is particularly easy until the test case; to search for the 10001^th prime number.

I will share with you my thought process and two things I learnt today about prime numbers.

## The problem
> By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

> What is the `n`th prime number?

## Given `num` a prime number?

We need to find out any given number is a prime number; we build this function similar to the one used for [solution 3](https://jinglescode.github.io/javascript/2020/01/06/project-euler-problem-3/).
```
function is_prime_num(num) {
  if (num % 2 === 0 || num % 3 === 0){
    return true;
  }
  var i = 5;
  while (i <= Math.ceil(Math.sqrt(num))) {
    if (num % i === 0)
      return false;
    if (num % (i + 2) === 0)
      return false;
    i+= 6;
  }
  return true;
}
```

## Today I learnt that #1
> prime numbers always satisfy the `6n+1` or `6n-1` conditions, but that doesn't mean that all numbers of that meet the conditions are prime numbers [[source](https://www.quora.com/Why-do-prime-numbers-always-satisfy-the-6n+1-and-6n-1-conditions-Is-there-mathematical-logic-behind-it)]

Lets visualise this with examples:
```
// 6n – 1: → 5, 11, 17, 23, 29, 35, 41, ...
// 6n + 1: → 7, 13, 19, 25, 31, 37, 43, ...
```

This means that we can save a lot of computation, by extracting the numbers with this formula until we get the number of prime numbers we need.
```
function generate_prime_numbers(n){
  var list_prime_numbers = [2, 3];
  for(var i=1;i<n;i++){
    current_prime = 6*i - 1;
    if(is_prime_num(current_prime)){
      list_prime_numbers.push(current_prime);
    }
    current_prime = 6*i + 1;
    if(is_prime_num(current_prime)){
      list_prime_numbers.push(current_prime);
    }
  }
}
```

Unfortunately, it did not return the correct result for `1000` and `10001`. The results are as follows:
```
Test value: 6
Output: 13
Took 0.22499999613501132 ms

Test value: 10
Output: 29
Took 0.04499999340623617 ms

Test value: 100
Output: 541
Took 0.2049999893642962 ms

Test value: 1000
Output: 5987
Took 4.014999984065071 ms

Test value: 10001
Output: 59999
Took 32.11999998893589 ms
```

The expected output for `1000` and `10001`:
```
nthPrime(1000) should return 7919.
nthPrime(10001) should return 104743.
```

## Today I learnt that #2

There is an upper bound to n^th prime number, and we can calculate the upper bound with this formula: `n * (Math.log(n) + Math.log(Math.log(n)))` [[source](https://math.stackexchange.com/questions/1270814/bounds-for-n-th-prime)]
```
function upper_bound_for_n_prime(n){
  if(n<6){
    return 13;
  }
  return n * (Math.log(n) + Math.log(Math.log(n)))
}
```
With this knowledge, we can safely use `while` loop to generate prime numbers and stop once we reached this upper bound number.
```
function generate_prime_numbers(n){
  var list_prime_numbers = [2, 3];
  var upper_bound = upper_bound_for_n_prime(n);
  var current_prime = 3;

  var i = 0;
  while(current_prime < upper_bound){
    i+=1;
    current_prime = 6*i - 1;
    if(is_prime_num(current_prime)){
      list_prime_numbers.push(current_prime);
    }
    current_prime = 6*i + 1;
    if(is_prime_num(current_prime)){
      list_prime_numbers.push(current_prime);
    }
  }
  return list_prime_numbers.slice(0, n);
}
```

## All together now
```
// list of numbers we wanna test
var test_values = [6, 10, 100, 1000, 10001];

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

function nthPrime(n) {
  var prime_numbers = generate_prime_numbers(n);
  return prime_numbers[prime_numbers.length-1];
}

// today i learnt that, the upper bound for nth prime number cannot be larger than
function upper_bound_for_n_prime(n){
  if(n<6){
    return 13;
  }
  return n * (Math.log(n) + Math.log(Math.log(n)))
}

function is_prime_num(num) {
  if (num % 2 === 0 || num % 3 === 0){
    return true;
  }
  var i = 5;
  while (i <= Math.ceil(Math.sqrt(num))) {
    if (num % i === 0)
      return false;
    if (num % (i + 2) === 0)
      return false;
    i+= 6;
  }
  return true;
}

// lets generate the prime numbers give that all prime numbers > 3 are fulfils `6n – 1` or `6n + 1`:
// 6n – 1: → 5, 11, 17, 23, 29, 35, 41, ...
// 6n + 1: → 7, 13, 19, 25, 31, 37, 43, ...
function generate_prime_numbers(n){
  var list_prime_numbers = [2, 3];
  var upper_bound = upper_bound_for_n_prime(n);
  var current_prime = 3;

  var i = 0;
  while(current_prime < upper_bound){
    i+=1;
    current_prime = 6*i - 1;
    if(is_prime_num(current_prime)){
      list_prime_numbers.push(current_prime);
    }
    current_prime = 6*i + 1;
    if(is_prime_num(current_prime)){
      list_prime_numbers.push(current_prime);
    }
  }
  return list_prime_numbers.slice(0, n);
}

run_function(nthPrime, test_values);

```

Output:
```
Test value: 6
Output: 13
Took 0.2099999983329326 ms

Test value: 10
Output: 29
Took 0.040000013541430235 ms

Test value: 100
Output: 541
Took 0.2500000118743628 ms

Test value: 1000
Output: 7919
Took 5.414999992353842 ms

Test value: 10001
Output: 104743
Took 73.96999999764375 ms
```
