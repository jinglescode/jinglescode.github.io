var test_number = 1000;

function run_function(func) {
  var t0 = performance.now();
  console.log('Output:', func);
  var t1 = performance.now();
  console.log("Took " + (t1 - t0) + " milliseconds.");
}

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

var sum = 0;
function multiplesOf3and5a(number) {
  for(var i = 1; i < number; i++){
    if((i % 3 === 0 )||(i % 5 === 0)||(i % 3 === 0 && i % 5 === 0)){
      sum = sum + i;
    }
  }
  return sum;
}

run_function(multiplesOf3and5a(test_number));