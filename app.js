"use strict";
window.addEventListener("load", start);

// ========== Variables ========== //
let number = 0;

// ========== Start Event ========== //

function start() {
    number = 0;
    document.querySelector("#btn-increment").addEventListener("click", incrementNumber);
    document.querySelector("#btn-decrement").addEventListener("click", decrementNumber);
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
    document.querySelector("#message").textContent = `The number is: ${number}`;
    // document.querySelector("#message").textContent = "The number is:" + number;
}
