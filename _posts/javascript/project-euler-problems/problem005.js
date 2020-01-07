/*
Project Euler: Problem 5: Smallest multiplePassed
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/

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
