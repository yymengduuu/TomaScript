document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("account-form") as HTMLFormElement;
  const nameInput = document.getElementById("name-input") as HTMLInputElement;
  const balanceInput = document.getElementById("balance-input") as HTMLInputElement;
  const nameDisplay = document.getElementById("account-name") as HTMLElement;
  const balanceDisplay = document.getElementById("account-balance") as HTMLElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    nameDisplay.textContent = nameInput.value;
    balanceDisplay.textContent = `£${parseFloat(balanceInput.value).toFixed(2)}`;
  });

  nameDisplay.textContent = "Jane Doe";
  balanceDisplay.textContent = "£1250.50";
});