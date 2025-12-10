function sum(a, b){
  return a+b;
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
let opPressed = false;

let firstNumber = 0;
let secondNumber = 0;
let opertaorTyped = '';
let firstNumberTyped = false;
let secondNumberTyped = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if(firstTime === true && button.id != "opBtn"){
      firstTime = false;
      display.textContent = "";
    }
    if(button.id != "opBtn" && button.textContent != "clear"){
      display.textContent += button.textContent;
      displayStr = display.textContent;
      firstNumberTyped = true;
      if(opPressed == true){
        secondNumberTyped = true;
      }
    } else if(opPressed === false && firstNumberTyped === true
        && button.textContent != '='){
      display.textContent += button.textContent;
      displayStr = display.textContent;
      opPressed = true;
      opertaorTyped = button.textContent;
    } else if(button.textContent === '=' && secondNumberTyped){
      let a = parseInt( displayStr.substring(0, displayStr.indexOf(opertaorTyped)) );
      let b = parseInt( displayStr.substring(displayStr.indexOf(opertaorTyped)+1, displayStr.length) );
      console.log(a + opertaorTyped + b);
      console.log(operate(a,b,opertaorTyped));
      display.textContent = operate(a,b,opertaorTyped);
    }
  })
})