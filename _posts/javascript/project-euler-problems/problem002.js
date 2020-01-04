var test_values = [10, 18, 23, 43];

function run_function(func, test_values) {
  for(var i in test_values){
    console.log('Test value:', test_values[i]);
    var t0 = performance.now();
    console.log('Output:', func(test_values[i]));
    var t1 = performance.now();
    console.log("Took " + (t1 - t0) + " milliseconds.");
    console.log();
  }
}

function fiboEvenSum(n) {
  var fib_nums = [1, 2];
  fib_nums = add(n, fib_nums);
  var sum = 0;
  for(var i in fib_nums){
    if(fib_nums[i]%2===0){
      sum = sum + fib_nums[i]
    }
  }
  return sum;
}

function add(n, fib_nums){
  var c = fib_nums[fib_nums.length-1] + fib_nums[fib_nums.length-2];
  fib_nums.push(c);
  if(fib_nums.length<n){
    return add(n, fib_nums);
  }else{
    return fib_nums;
  }
}


run_function(fiboEvenSum, test_values);
