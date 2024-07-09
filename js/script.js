`use strict`;

// getting acess to the dom elements

const display = document.querySelector(`.display`);
const numbers = document.querySelectorAll(`.number`);
const operators = document.querySelectorAll(`.operator`);
const equals = document.querySelector(`.equals`);
const clearBtn = document.getElementById(`clear`);

// static vriables
let number1 = 0;
let number2 = 0;
let operator = ``;
let flag = false;
let numberStr = ``;

// functions to perform the mathamatical operations

function add(num1, num2) {
  flag = false;
  let result = (Number(num1) + Number(num2)).toFixed(3);
  display.textContent = result;
  number1 = result;
  return result;
}
function sub(num1, num2) {
  flag = false;
  let result = (Number(num1) - Number(num2)).toFixed(3);
  display.textContent = result;
  number1 = result;
  return result;
}
function mul(num1, num2) {
  flag = false;
  let result = (Number(num1) * Number(num2)).toFixed(3);
  display.textContent = result;
  number1 = result;
  return result;
}
function divide(num1, num2) {
  flag = false;
  if (Number(num2) === 0) {
    display.textContent = `ERROR DIVISION BY 0`;
    number1 = 0;
    number2 = 0;
    operator = ``;
    numberStr = ``;
    flag = false;
  } else {
    let result = (Number(num1) / Number(num2)).toFixed(3);
    display.textContent = result;
    number1 = result;
    return result;
  }
}

// operate function

function operation(num1, num2, op) {
  switch (op) {
    case `+`:
      return add(num1, num2);
      break;
    case `-`:
      return sub(num1, num2);
      break;
    case `*`:
      return mul(num1, num2);
      break;
    case `/`:
      return divide(num1, num2);
      break;
    default:
      return NaN;
  }
}

// Adding event listener to the numbers on the calculator
numbers.forEach((number) => {
  number.addEventListener(`click`, function (e) {
    numberStr += this.innerText;
    display.textContent = numberStr;
    if (!flag) {
      number1 = numberStr;
    } else {
      number2 = numberStr;
    }
  });
});

// Adding event listener to the operator btns on the calculator

operators.forEach((operate) => {
  operate.addEventListener(`click`, function (e) {
    if (flag) {
      number1 = operation(number1, number2, operator);
      display.textContent = number1;
    }
    flag = true;
    operator = operate.textContent;
    display.textContent = operator;
    numberStr = ``;
  });
});

// Adding event listener to the equals operator
equals.addEventListener(`click`, function (e) {
  if (operator === `+`) {
    add(number1, number2);
  } else if (operator === `-`) {
    sub(number1, number2);
  } else if (operator === `*`) {
    mul(number1, number2);
  } else if (operator === `/`) {
    divide(number1, number2);
  }
});

// Adding the clear display functuanility

clearBtn.addEventListener(`click`, function (e) {
  number1 = 0;
  number2 = 0;
  operator = ``;
  numberStr = ``;
  flag = false;
  display.textContent = 0;
});

// Adding event listener to the all clear function

// Pseudo Code for solving the problem.

// 1. Create three static variables , first one store the first number. second variable stores the operator and the third one stores the second variable.

// 2. When user entered the numbers key, numbers should display to the screen. and the value should be stored in the numbers variable which is first one.
// 3. when user enters the operator key, that value should be stored in operator variable.
// 4. when after opertor key pressed number pressed by the user should be stored in the second variable
// 5. when equals operator got pressed the following functions of mathematical operations should be pressed
