const add = function(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) return "ERROR" ;
  else return (num1 + num2);
};

console.log(add(42,35,53));

const subtract = function(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) return "ERROR" ;
  else return (num1 - num2);
};

const sum = function(toBeSummed) {
  let finalSum = 0;
  for(let i=0; i<toBeSummed.length; i++) 
  { 
    if(isNaN(toBeSummed[i])) return "ERROR";   
    finalSum += toBeSummed[i];
  }
  return finalSum;
};

const multiply = function(toBeMultiplied) {
  let finalMultiplied = 1;
  for(let i=0; i<toBeMultiplied.length; i++) 
  { 
    if(isNaN(toBeMultiplied[i])) return "ERROR";   
    finalMultiplied = finalMultiplied*toBeMultiplied[i];
  }
  return finalMultiplied;
};

const power = function(num1,num2) {
  if(isNaN(num1) || isNaN(num2)) return "ERROR" ;
  else return Math.pow(num1,num2);
};

const factorial = function(num1) {
  if(isNaN(num1)) return "ERROR" ;
  else {
    if (num1 == 0) return 1;
    else {
      for(let i = num1-1; i>0; i--)
        {
          num1 = num1*i;
        }      return num1;
    };
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
