/*
Project Euler: Problem 3: Largest prime factorPassed
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the given number?
*/

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
