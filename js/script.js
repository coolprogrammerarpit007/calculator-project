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
let flag = false;
let total = 0;

const addition = function (num1, num2) {
  total = num1 + num2;
  displayText.textContent = total;
  return total;
};
const subtraction = function (num1, num2) {
  total = num1 - num2;
  displayText.textContent = total;
  return total;
};
const multiplication = function (num1, num2) {
  total = num1 * num2;
  displayText.textContent = total;
  return total;
};

const division = function (num1, num2) {
  total = num1 / num2;
  displayText.textContent = total;
  return total;
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

const displayOperator = function (value) {
  console.log(`display operator`);
  displayText.textContent = value;
  flag = true;
  str = ``;
  console.log(flag);
};

numberBtns.forEach((btn) => {
  btn.addEventListener(`click`, function (e) {
    if (flag) {
      console.log(str);
      str += btn.textContent;
      display(str);
      num2 = str;
      console.log(`Number 2: ${num2}`);
    } else {
      str += btn.textContent;
      display(str);
      num1 = str;
      console.log(`Number 1:${num1} `);
    }
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener(`click`, function (e) {
    operator = btn.textContent;
    displayOperator(operator);
  });
});

// **********************************
// Adding funcnaity to the equals operator

equalsOp.addEventListener(`click`, function (e) {
  num1 = Number(num1);
  num2 = Number(num2);
  operate(num1, num2, operator);
});
