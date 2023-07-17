var increasingTriplet = function(nums) {
    let firstNumber = Infinity;
    let secondNumber = Infinity;
    
    for (let currentNumber of nums) {
      if (currentNumber > secondNumber && currentNumber > firstNumber) {
        return true;
      }
      if (currentNumber > firstNumber) {
        secondNumber = currentNumber;
      } else {
        firstNumber = currentNumber;
      }
        console.log(currentNumber, firstNumber, secondNumber)
    }
    return false;
  };


  //lines 9-12 are the key to this problem. We replace firstNumber ahead of second number. and keep track of each one. then we only care about the currrent number
  