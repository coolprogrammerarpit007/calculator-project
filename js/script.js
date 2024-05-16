`use strict`;

// Acessing the calculator screen.
const displayText = document.querySelector(`.display`);

// Acessing the calculator buttons
const calculatorBtns = document.querySelectorAll(`.btn`);
const numberBtns = document.querySelectorAll(`.number`);
const operatorBtns = document.querySelectorAll(`.operator`);
// const methodBtns = document.querySelectorAll(`.method`);
const equalsOp = document.querySelector(`.equals`);
const allClear = document.getElementById(`clear`);

// ****************************************

// Calculator functuaniity
let num1;
let operator;
let num2;
let str = ``;
let flag = false;
let total;

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
  displayText.textContent = value;
  flag = true;
  str = ``;
};

numberBtns.forEach((btn) => {
  btn.addEventListener(`click`, function (e) {
    if (flag) {
      str += btn.textContent;
      display(str);
      num2 = str;
    } else {
      str += btn.textContent;
      display(str);
      num1 = str;
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
  if (total) {
    num1 = total;
    console.log(num1);
  }
  num1 = Number(num1);
  num2 = Number(num2);
  operate(num1, num2, operator);
});

// Adding the all clear functuanility

allClear.addEventListener(`click`, function (e) {
  // setting all values back to default
  displayText.textContent = 0;
  total = 0;
  str = ``;
  num1 = 0;
  num2 = 0;
  flag = false;
  operator = ``;
});
