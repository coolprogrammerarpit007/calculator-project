`use strict`;

// Acessing the calculator screen.
const display = document.querySelector(`.display`);

// Acessing the calculator buttons
const calculatorBtns = document.querySelectorAll(`.btn`);
const numberBtns = document.querySelectorAll(`.number`);
const operatorBtns = document.querySelectorAll(`.operator`);
const methodBtns = document.querySelectorAll(`.method`);
const equalsOp = document.querySelector(`.equals`);

// storing state variables.
let total = 0;
let num;
let operator;

// Adding the functaniolity to the calculator

numberBtns.forEach((btn) => {
  btn.addEventListener(`click`, function (e) {
    num = Number(btn.textContent);
    display.textContent = num;
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener(`click`, function (e) {
    operator = btn.textContent;
    if (operator === `+`) {
      total += num;
    } else if (operator === `-`) {
      total -= num;
    } else if (operator === `/`) {
      total /= num;
    } else if (operator === `*`) {
      total *= num;
    }
    console.log(total);
    display.textContent = total;
  });
});

// Event listener to the equal operator

equalsOp.addEventListener(`click`, function (e) {
  if (operator === `+`) {
    total += num;
  } else if (operator === `-`) {
    total -= num;
  } else if (operator === `/`) {
    total /= num;
  } else if (operator === `*`) {
    total *= num;
  }
  console.log(total);
  display.textContent = total;
});
