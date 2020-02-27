/*
Project Euler: Problem 6: Sum square differencePassed
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
*/

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
