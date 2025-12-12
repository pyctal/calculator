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
}

function updateNumbers(digit) {
  if (isFirstNum) {
    firstNum += digit;
  } else {
    secondNum += digit;
  }
}

function updateExpressionDisplay() {
  expressionDisplay.textContent = `${firstNum} ${operator} ${secondNum}`;
}

function updateResultDisplay() {
  resultDisplay.textContent = result;
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

function handleNumPress(event) {
  switch (event.target.id) {
    case "0":
      updateExpression("0");
      break;
    case "1":
      updateExpression("1");
      break;
    case "2":
      updateExpression("2");
      break;
    case "3":
      updateExpression("3");
      break;
    case "4":
      updateExpression("4");
      break;
    case "5":
      updateExpression("5");
      break;
    case "6":
      updateExpression("6");
      break;
    case "7":
      updateExpression("7");
      break;
    case "8":
      updateExpression("8");
      break;
    case "9":
      updateExpression("9");
      break;
    case ".":
      updateExpression(".");
      break;
  }
}
