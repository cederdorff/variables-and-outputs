"use strict";
window.addEventListener("load", initApp);

// ========== Variables ========== //
let number = 0;

// ========== Init App Event ========== //

function initApp() {
  number = 0;
  document
    .querySelector("#btn-increment")
    .addEventListener("click", incrementNumber);
  document
    .querySelector("#btn-decrement")
    .addEventListener("click", decrementNumber);
}

// ========== Increment and decrement functions ========== //

function incrementNumber() {
  number = number + 1;
  displayNumber();
}

function decrementNumber() {
  number = number - 1;
  displayNumber();
}

// ========== Display Number function ========== //

function displayNumber() {
  document.querySelector("#number").textContent = number;
  let message = "";
  if (number > 10) {
    message = "Number is above 10";
  } else if (number == 10) {
    message = "Number is 10";
  } else {
    message = "Number is below 10";
  }
  console.log(message);
  document.querySelector("#message").textContent = message;
}
