---
title: Project Euler - Problem 1 - Multiples of 3 and 5
layout: note
image: /assets/img/posts/project-euler.webp
description: Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
category: javascript
tags:
- ProjectEuler100
- javascript
- ProjectEuler
---

## The problem

This is [problem 1](https://projecteuler.net/problem=1) from the [Project Euler](https://projecteuler.net/).

> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

> Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

---

## Let's begin
Initialise variables and common functions:
```
var test_number = 8456; // this number we wanna test

// this function execute the code and records the time to execute
function run_function(func) {
  var t0 = performance.now();
  console.log('Output:', func);
  var t1 = performance.now();
  console.log("Took " + (t1 - t0) + " milliseconds.");
}
```

## Attempt #1: recursive functions
Personal challenge, I always enjoy stretching myself with recursive functions, so here is my take on this problem with a recursive function.  
```
function multiplesOf3and5(number) {
  number = number - 1;
  var list_numbers = []
  list_numbers = multiplesOfN(list_numbers, number, 3);
  list_numbers = multiplesOfN(list_numbers, number, 5);
  return list_numbers.reduce((a, b) => a + b, 0)
}

function multiplesOfN(list_numbers, number, n) {
  if(number > 0 && number%n==0 && !list_numbers.includes(number)) {
    list_numbers.push(number);
    return multiplesOfN(list_numbers, number-n, n);
  }else if(number > 0){
    return multiplesOfN(list_numbers, number-1, n);
  }else{
    return list_numbers;
  }
}

run_function(multiplesOf3and5(test_number));
```

The output:
```
Output: 16687353
Took 0.5999999993946403 milliseconds.
```

Hmmm, but if the test number is `19564`, recursive functions will overflow:
```
RangeError: Maximum call stack size exceeded
```

## Attempt #2: for-loop
Go back to the good old for-loop:
```
var sum = 0;
function multiplesOf3and5_b(number) {
  for(var i = 1; i < number; i++){
    if((i % 3 === 0 )||(i % 5 === 0)){
      sum = sum + i;
    }
  }
  return sum;
}

run_function(multiplesOf3and5_b(test_number));
```

The output:
```
Output: 16687353
Took 0.045000000682193786 milliseconds.
```

Works great for test number `19564`:
```
Output: 89301183
Took 0.6550000034621917 milliseconds.
```

---

The recursive method overflow at bigger test case and good old for-loop is more efficient. Can it be any better?

I just began my [Project Euler Challenge](https://projecteuler.net/) journey; anyone wants to do this together? It will be fun and we can learn a thing or two by solving this problem in different ways.
