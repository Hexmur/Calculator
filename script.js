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

function writeDisplay(){

}

let a = 0;
let b = 0;
let operator = '';

const container = document.querySelector("#buttonsDiv");

const buttons = container.querySelectorAll(".btn");
const clearBtn = container.querySelector("#dispkay");
const display = container.querySelector("#display");

let displayStr = display.textContent;
let firstTime = true;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if(firstTime === true){
      firstTime = false;
      display.textContent = "";
    }
    display.textContent += button.textContent;
    displayStr = display.textContent;
  })
})