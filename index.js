"use strict";

const expressionDisplay = document.querySelector(".expression");
const resultDisplay = document.querySelector(".result");

let firstNum = "";
let secondNum = "";
let operator = "";
let isFirstNum = true;
let result;

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
  updateResultDisplay();
}

function updateExpressionDisplay() {
  expressionDisplay.textContent = `${firstNum} ${operator} ${secondNum}`;
}

function updateResultDisplay() {
  resultDisplay.textContent = result;
}

function updateNumbers(digit) {
  if (isFirstNum) {
    firstNum += digit;
  } else {
    secondNum += digit;
  }
  updateExpressionDisplay();
}

function updateOperator(op) {
  if (firstNum !== "") {
    operator = op;
    isFirstNum = false;
    updateExpressionDisplay();
  }
}

function backspace() {
  if (secondNum !== "") {
    secondNum = secondNum.slice(0, -1);
  } else if (operator !== "") {
    operator = "";
  } else {
    firstNum = firstNum.slice(0, -1);
  }
  updateExpressionDisplay();
}

function handleNumPress(event) {
  const key = event.target.id;
  if (key === "+-") {
    // toggleSign(); TODO: Implement this
  } else {
    updateNumbers(key);
  }
}

function handleOperatorPress(event) {
  const key = event.target.id;
  if (key === "=") {
    operate();
  } else {
    updateOperator(key);
  }
}
