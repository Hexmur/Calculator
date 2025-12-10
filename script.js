function sum(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function operate(a, b, operator){
  switch(operator){
    case '+': return sum(a,b);
    case '-': return subtract(a,b);
    case '*': return multiply(a,b);
    case '/': return divide(a,b);
  }
}

let a = 0;
let b = 0;
let operator = '';