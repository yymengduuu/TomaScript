"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("account-form");
    var nameInput = document.getElementById("name-input");
    var balanceInput = document.getElementById("balance-input");
    var nameDisplay = document.getElementById("account-name");
    var balanceDisplay = document.getElementById("account-balance");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        nameDisplay.textContent = nameInput.value;
        balanceDisplay.textContent = "\u00A3".concat(parseFloat(balanceInput.value).toFixed(2));
    });
    nameDisplay.textContent = "Jane Doe";
    balanceDisplay.textContent = "£1250.50";
});
