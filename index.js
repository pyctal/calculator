"use strict";

const expressionDisplay = document.querySelector(".expression");
const resultDisplay = document.querySelector(".result");

let firstNum = "";
let secondNum = "";
let operator = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate() {
  let result;
  switch (operator) {
    case "+":
      result = add(firstNum, secondNum);
      break;
    case "-":
      result = subtract(firstNum, secondNum);
      break;
    case "*":
      result = multiply(firstNum, secondNum);
      break;
    case "/":
      result = divide(firstNum, secondNum);
      break;
  }
  return result;
}

function updateExpression() {
  expressionDisplay.textContent = `${firstNum} ${operator} ${secondNum}`;
}

function updateResult() {
  resultDisplay.textContent = operate();
}

function backspace() {
  if (secondNum !== "") {
    secondNum = secondNum.slice(0, -1);
  } else if (operator !== "") {
    operator = "";
  } else {
    firstNum = firstNum.slice(0, -1);
  }
  updateExpression();
}
