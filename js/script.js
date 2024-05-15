`use strict`;

// Acessing the calculator screen.
const displayText = document.querySelector(`.display`);

// Acessing the calculator buttons
const calculatorBtns = document.querySelectorAll(`.btn`);
const numberBtns = document.querySelectorAll(`.number`);
const operatorBtns = document.querySelectorAll(`.operator`);
const methodBtns = document.querySelectorAll(`.method`);
const equalsOp = document.querySelector(`.equals`);

// ****************************************

// Calculator functuaniity
let num1;
let operator;
let num2;
let str = ``;

const addition = function (num1, num2) {
  return num1 + num2;
};
const subtraction = function (num1, num2) {
  return num1 - num2;
};
const multiplication = function (num1, num2) {
  return num1 * num2;
};

const division = function (num1, num2) {
  return num1 / num2;
};

const operate = function (num1, num2, op) {
  if (op === `+`) {
    addition(num1, num2);
  } else if (op === `-`) {
    subtraction(num1, num2);
  } else if (op === `*`) {
    multiplication(num1, num2);
  } else if (op === `/`) {
    division(num1, num2);
  }
};

// ***********************************
const display = function (value) {
  displayText.textContent = value;
};

numberBtns.forEach((btn) => {
  btn.addEventListener(`click`, function (e) {
    str += btn.textContent;
    display(str);
  });
});
