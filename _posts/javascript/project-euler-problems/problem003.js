// list of numbers we wanna test
var test_values = [2, 3, 5, 7, 13195];

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
  if(number%2===0){
    return 2;
  }

  var largest_prime = 3;
  for(var i=3; i<number; i+=2){
    if(number%i===0){
      largest_prime = i;
    }
  }

  return largest_prime;
}

run_function(largestPrimeFactor, test_values);
