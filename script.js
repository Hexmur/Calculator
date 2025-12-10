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
const clearBtn = container.querySelector("#clearBtn");
const display = container.querySelector("#display");

let displayStr = display.textContent;
let firstTime = true;
let opPressed = false;

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
      if(firstNumberTyped == false) display.textContent = '';
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
    } else if(opPressed === true && firstNumberTyped === true
        && button.textContent != '=' && secondNumberTyped === false){
      console.log("heyyy");
      display.textContent = display.textContent.substring(0, displayStr.indexOf(opertaorTyped));
      display.textContent += button.textContent;
      displayStr = display.textContent;
      opertaorTyped = button.textContent;
    } else if(button.textContent === '=' && secondNumberTyped){
      let a = parseInt( displayStr.substring(0, displayStr.indexOf(opertaorTyped)) );
      let b = parseInt( displayStr.substring(displayStr.indexOf(opertaorTyped)+1, displayStr.length) );
      if(opertaorTyped === '/' && b === 0){
        display.textContent = "I can't divide by 0!";
        firstTime = false;
        opPressed = false;
        opertaorTyped = '';
        firstNumberTyped = false;
        secondNumberTyped = false;
      } else{
        console.log(a + opertaorTyped + b);
        console.log(operate(a,b,opertaorTyped));
        display.textContent = operate(a,b,opertaorTyped);
        firstNumberTyped = true;

        firstTime = false;
        opPressed = false;

        opertaorTyped = '';
        secondNumberTyped = false;
      }
    } else if((button.id === "opBtn" && secondNumberTyped)){
      let a = parseInt( displayStr.substring(0, displayStr.indexOf(opertaorTyped)) );
      let b = parseInt( displayStr.substring(displayStr.indexOf(opertaorTyped)+1, displayStr.length) );
      console.log(operate(a,b,opertaorTyped));
      display.textContent = operate(a,b,opertaorTyped) + button.textContent;

      firstTime = false;
      opPressed = true;

      opertaorTyped = button.textContent;
      firstNumberTyped = true;
      secondNumberTyped = false;
    }
  })
});

clearBtn.addEventListener("click", () => {
  console.log("ciaooo");
  firstTime = true;
  opPressed = false;

  opertaorTyped = '';
  firstNumberTyped = false;
  secondNumberTyped = false;
  display.textContent = '--------------------------------------';
})