---
title: Project Euler - Problem 5 - Smallest multiple
layout: note
image: /assets/img/posts/project-euler.webp
description: What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
category: programming
tags:
- javascript
- algorithm
---

## The problem
This is [problem 5](https://projecteuler.net/problem=5) from the [Project Euler](https://projecteuler.net/).

> 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

> What is the smallest positive number that is evenly divisible by all of the numbers from 1 to `n`?

---

## Multiply prime numbers

I know it is something to do with `Lowest Common Multiple` and `prime numbers`; unfortunately, LCM is something I haven't seen for almost 20 years. So let's recap what LCM is.

I don't know about you, but online resources didn't help me much. I will do the trial and error way to figure out the patterns.

We are given a few test cases:
```
input(5) = 60
input(7) = 420
input(10) = 2520
```

I know I have to use prime numbers, so let me multiply some prime numbers to achieve test case results:
```
input(5) -> 2 * 3 * 5 = 30
input(7) -> 2 * 3 * 5 * 7 = 210
```

I didn't get the same results as the test case, but the differences are apparent. We need to double `30` and `210` for `input(5)` and `input(7)` respectively.

Some prime numbers have to be multiplied a few times, and we will get the same results as the test cases:
```
input(5) = 60
  = 1 * 2 * 3 * 2 * 5
  = 2^2 * 3 * 5
  = 2^2 * 3^1 * 5^1
input(7) = 420
  = 1 * 2 * 3 * 2 * 5 * 7
  = 2^2 * 3 * 5 * 7
  = 2^2 * 3^1 * 5^1 * 7^1
input(10) = 2520
  = 1 * 2 * 3 * 2 * 5 * 2 * 7 * 3
  = 2^3 * 3^2 * 5 * 7
  = 2^3 * 3^2 * 5^1 * 7^1
```

Since I have to work with multiplication and powers, I am expecting to see logarithm in my algorithm too.

So the question here is to figure out the number of times each prime number has to be multiplied by. That is:
```
for each prime number:
  product *= Math.pow(prime, ?)
```

The idea here is to find the maximum exponent for each prime number, that is to find out the number of times each prime number has to be multiplied by dividing logarithm of the input number `n` by logarithm of the prime number. Since all exponent is whole numbers, we use `Math.floor` to round down the exponent.
```
Math.floor [ Math.log(number) / Math.log(prime) ]
```

So, for-loop over all primes numbers `prime_numbers` less than given number `n` and multiply them together with a `reduce` function:
```
var multiply_them = prime_numbers.reduce(function(product, prime) {
  return product * Math.pow(prime, Math.floor(Math.log(n) / Math.log(prime)));
}, 1);
```

## Get all prime numbers less than given number `n`

This is pretty straight forward.

The number `2` is the only even prime number. We can skip all even numbers, as all other even numbers are not prime numbers.

If a number `num` divides every other prime number less than `num` does not produce any decimal, then `num` is a prime number.

Return `list_of_prime_nums` containing every prime number smaller than `n`.

```
// generate and return prime numbers less than `n`
// skipping all even numbers because `2` is the only even prime number
function generate_prime_from_less_than_n(n){
  var list_of_prime_nums = [2];
  for(var i=3; i<=n; i+=2){
    var is_prime = true;
    for(var j=0; j<list_of_prime_nums.length; j++){
      var check_is_prime = i % list_of_prime_nums[j];
      if(check_is_prime === 0){
        is_prime = false;
        break;
      }
    }
    if(is_prime){
      list_of_prime_nums.push(i);
    }
  }
  return list_of_prime_nums;
}
```

## Combine everything

```
// list of numbers we wanna test
var test_values = [5, 7, 10, 13, 20];

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

function smallestMult(n) {
  var prime_numbers = generate_prime_from_less_than_n(n);
  console.log('prime numbers:', prime_numbers);

  var multiply_them = prime_numbers.reduce(function(product, prime) {
    return product * Math.pow(prime, Math.floor(Math.log(n) / Math.log(prime)));
  }, 1);

  return multiply_them;
}

// generate and return prime numbers less than `n`
// skipping all even numbers because `2` is the only even prime number
function generate_prime_from_less_than_n(n){
  var list_of_prime_nums = [2];
  for(var i=3; i<=n; i+=2){
    var is_prime = true;
    for(var j=0; j<list_of_prime_nums.length; j++){
      var check_is_prime = i % list_of_prime_nums[j];
      if(check_is_prime === 0){
        is_prime = false;
        break;
      }
    }
    if(is_prime){
      list_of_prime_nums.push(i);
    }
  }
  return list_of_prime_nums;
}

run_function(smallestMult, test_values);
```

Output:
```
Test value: 5
prime numbers: [ 2, 3, 5 ]
Output: 60
Took 0.6450000073527917 ms

Test value: 7
prime numbers: [ 2, 3, 5, 7 ]
Output: 420
Took 0.26000000070780516 ms

Test value: 10
prime numbers: [ 2, 3, 5, 7 ]
Output: 2520
Took 0.16999999934341758 ms

Test value: 13
prime numbers: [ 2, 3, 5, 7, 11, 13 ]
Output: 360360
Took 0.13500000932253897 ms

Test value: 20
prime numbers: [ 2, 3, 5, 7, 11, 13, 17, 19 ]
Output: 232792560
Took 0.13000000035390258 ms
```

---

This is my [Project Euler Challenge](https://projecteuler.net/) journey; anyone wants to do this together? It will be fun and we can learn a thing or two by solving this problem in different ways.

---

# Full Code

<script src="https://gist.github.com/jinglescode/17b271dda52234afeb2b4721e3cdaa4a.js"></script>
