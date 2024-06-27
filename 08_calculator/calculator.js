const add = function(a, b) {
  return a+b;	
};

const subtract = function(a, b) {
  return a-b;	
};

const sum = function(array) {
  const total = array.reduce((acc, cur) => acc + cur, 0);
  return total;
};

const multiply = function(array) {
  const total = array.reduce((acc, cur) => acc * cur, 1);
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  if (n === 1){
    return 1;
  }
	let total = 1;
  for (let index = n; index > 0; index--) {
    total *= index 
  }
  return total
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
