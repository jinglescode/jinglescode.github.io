---
title: Project Euler - Problem 8 - Largest product in a series
layout: note
image: /assets/img/posts/project-euler.webp
description: What is the nth prime number?
category: javascript
tags:
- javascript
- algorithm
---

I am currently on this [Project Euler Challenge](https://projecteuler.net/) journey.

Today I am on [problem 8](https://projecteuler.net/problem=8)!

## The problem
> The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

> Find the `n` adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

## Attempt 1 - The brute force

It's pretty straight forward. We loop through the list with a sliding window.

For example given a list `[1,2,3,4,5,6,7]`, and the window size `n` = 3, we can get 5 possible windows:
```
[1,2,3]
[2,3,4]
[3,4,5]
[4,5,6]
[5,6,7]
```

For each window, we calculate the product of all values in the window with a 'reduce' function:
```
window_product = window.reduce( (a,b) => a * b );
```

If the `window_product` is higher than the existing highest `window_product`, we update:
```
if(window_product>largest_product){
  largest_product = window_product;
  largest_window = window;
}
```

That's pretty much it, here's the entire code:
```
class Tester {
  constructor(func_call, test_values) {
    this.timer_start = performance.now();
    this.timer_end = performance.now();
    this.execute_func(func_call, test_values);
  }
  execute_func(func_call, test_values) {
    for(var i in test_values){
      this.timer_start = performance.now();
      console.log('Test value:', test_values[i]);
      console.log('Output:', func_call(test_values[i]));
      this.timer_end = performance.now();
      console.log("Took " + (this.timer_end - this.timer_start) + " ms");
      console.log();
    }
  }
}

function largestProductinaSeries(n) {
  let thousandDigits = [7,3,1,6,7,1,7,6,5,3,1,3,3,0,6,2,4,9,1,9,2,2,5,1,1,9,6,7,4,4,2,6,5,7,4,7,4,2,3,5,5,3,4,9,1,9,4,9,3,4,9,6,9,8,3,5,2,0,3,1,2,7,7,4,5,0,6,3,2,6,2,3,9,5,7,8,3,1,8,0,1,6,9,8,4,8,0,1,8,6,9,4,7,8,8,5,1,8,4,3,8,5,8,6,1,5,6,0,7,8,9,1,1,2,9,4,9,4,9,5,4,5,9,5,0,1,7,3,7,9,5,8,3,3,1,9,5,2,8,5,3,2,0,8,8,0,5,5,1,1,1,2,5,4,0,6,9,8,7,4,7,1,5,8,5,2,3,8,6,3,0,5,0,7,1,5,6,9,3,2,9,0,9,6,3,2,9,5,2,2,7,4,4,3,0,4,3,5,5,7,6,6,8,9,6,6,4,8,9,5,0,4,4,5,2,4,4,5,2,3,1,6,1,7,3,1,8,5,6,4,0,3,0,9,8,7,1,1,1,2,1,7,2,2,3,8,3,1,1,3,6,2,2,2,9,8,9,3,4,2,3,3,8,0,3,0,8,1,3,5,3,3,6,2,7,6,6,1,4,2,8,2,8,0,6,4,4,4,4,8,6,6,4,5,2,3,8,7,4,9,3,0,3,5,8,9,0,7,2,9,6,2,9,0,4,9,1,5,6,0,4,4,0,7,7,2,3,9,0,7,1,3,8,1,0,5,1,5,8,5,9,3,0,7,9,6,0,8,6,6,7,0,1,7,2,4,2,7,1,2,1,8,8,3,9,9,8,7,9,7,9,0,8,7,9,2,2,7,4,9,2,1,9,0,1,6,9,9,7,2,0,8,8,8,0,9,3,7,7,6,6,5,7,2,7,3,3,3,0,0,1,0,5,3,3,6,7,8,8,1,2,2,0,2,3,5,4,2,1,8,0,9,7,5,1,2,5,4,5,4,0,5,9,4,7,5,2,2,4,3,5,2,5,8,4,9,0,7,7,1,1,6,7,0,5,5,6,0,1,3,6,0,4,8,3,9,5,8,6,4,4,6,7,0,6,3,2,4,4,1,5,7,2,2,1,5,5,3,9,7,5,3,6,9,7,8,1,7,9,7,7,8,4,6,1,7,4,0,6,4,9,5,5,1,4,9,2,9,0,8,6,2,5,6,9,3,2,1,9,7,8,4,6,8,6,2,2,4,8,2,8,3,9,7,2,2,4,1,3,7,5,6,5,7,0,5,6,0,5,7,4,9,0,2,6,1,4,0,7,9,7,2,9,6,8,6,5,2,4,1,4,5,3,5,1,0,0,4,7,4,8,2,1,6,6,3,7,0,4,8,4,4,0,3,1,9,9,8,9,0,0,0,8,8,9,5,2,4,3,4,5,0,6,5,8,5,4,1,2,2,7,5,8,8,6,6,6,8,8,1,1,6,4,2,7,1,7,1,4,7,9,9,2,4,4,4,2,9,2,8,2,3,0,8,6,3,4,6,5,6,7,4,8,1,3,9,1,9,1,2,3,1,6,2,8,2,4,5,8,6,1,7,8,6,6,4,5,8,3,5,9,1,2,4,5,6,6,5,2,9,4,7,6,5,4,5,6,8,2,8,4,8,9,1,2,8,8,3,1,4,2,6,0,7,6,9,0,0,4,2,2,4,2,1,9,0,2,2,6,7,1,0,5,5,6,2,6,3,2,1,1,1,1,1,0,9,3,7,0,5,4,4,2,1,7,5,0,6,9,4,1,6,5,8,9,6,0,4,0,8,0,7,1,9,8,4,0,3,8,5,0,9,6,2,4,5,5,4,4,4,3,6,2,9,8,1,2,3,0,9,8,7,8,7,9,9,2,7,2,4,4,2,8,4,9,0,9,1,8,8,8,4,5,8,0,1,5,6,1,6,6,0,9,7,9,1,9,1,3,3,8,7,5,4,9,9,2,0,0,5,2,4,0,6,3,6,8,9,9,1,2,5,6,0,7,1,7,6,0,6,0,5,8,8,6,1,1,6,4,6,7,1,0,9,4,0,5,0,7,7,5,4,1,0,0,2,2,5,6,9,8,3,1,5,5,2,0,0,0,5,5,9,3,5,7,2,9,7,2,5,7,1,6,3,6,2,6,9,5,6,1,8,8,2,6,7,0,4,2,8,2,5,2,4,8,3,6,0,0,8,2,3,2,5,7,5,3,0,4,2,0,7,5,2,9,6,3,4,5,0];
  return attempt1_bruteforce(thousandDigits, n);
}

function attempt1_bruteforce(thousandDigits, n){
  var num_comparisons = thousandDigits.length-(n-1);
  var window = [];
  var window_product = 0;
  var largest_window = [];
  var largest_product = 10;
  for(var window_i=0; window_i<num_comparisons; window_i++){
    window = thousandDigits.slice(window_i, window_i+n);
    window_product = window.reduce( (a,b) => a * b );
    if(window_product>largest_product){
      largest_product = window_product;
      largest_window = window;
    }
  }
  console.log({num_comparisons});
  console.log({largest_window});
  console.log({largest_product});
  return largest_product
}

// list of numbers we wanna test
var test_values = [3, 4];
new Tester(largestProductinaSeries, test_values);
```

Output:
```
Test value: 3
{ num_comparisons: 998 }
{ largest_window: [ 9, 8, 9 ] }
{ largest_product: 648 }
Output: 648
Took 3.020000000105938 ms

Test value: 4
{ num_comparisons: 997 }
{ largest_window: [ 9, 9, 8, 9 ] }
{ largest_product: 5832 }
Output: 5832
Took 0.7700000005570473 ms
```

I am sure it can be improve to be more efficient than this.
