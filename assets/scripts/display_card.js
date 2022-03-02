export const displayCardId = "display-card",
  tipId = "tip-amount",
  totalId = "total-amount";

export function displayOutput(id, amount = null) {
  const output = document.getElementById(id);

  let displayText;
  if (amount === null) {
    displayText = "$0.00";
  } else if (isNaN(amount) || amount < 0) {
    displayText = "Error";
  } else if (amount < 1000) {
    displayText = amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  } else {
    displayText = "&#128184&#128184&#128184";
  }

  output.innerHTML = displayText;
}

/*
    Setup & Resets
*/

export function enableResetButton() {
  document.querySelector(`#${displayCardId} input[type=reset]`).removeAttribute("disabled");
}

export function disableResetButton() {
  document.querySelector(`#${displayCardId} input[type=reset]`).setAttribute("disabled", "true");
}
