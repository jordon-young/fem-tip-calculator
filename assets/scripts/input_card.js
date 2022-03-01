const amountBilledId = "amount-billed",
  customTipId = "tip-custom",
  inputCardId = "input-card",
  numPeopleId = 'number-of-people';

/*
    Amount Billed 
*/

function updateAmountBilled(event) {
  // const input = document.getElementById(amountBilledId);
  // input.value = event.target.value;
}

function formatAmountBilled() {
  const input = document.getElementById(amountBilledId);
  const val = input.value;
  console.log(val);
  if (!isNaN(val)) {
    input.value = (+val).toFixed(2);
  }
}

function watchBilledAmount() {
  // document
  // .getElementById(amountBilledId)
  // .addEventListener("input", () => { updateAmountBilled() });

  document.getElementById(amountBilledId).addEventListener("blur", () => formatAmountBilled());
}

/*
    Custom Tip Field
*/

function showCustomTipField() {
  // Hide custom-tip-radio div
  document
    .querySelector(`#${inputCardId} .custom-tip-radio`)
    .classList.add("accessibility-safe-hide");

  // Show custom-tip div
  document
    .querySelector(`#${inputCardId} .custom-tip`)
    .classList.remove("accessibility-safe-hide");

  // Focus custom-tip input
  document.getElementById("custom-tip").focus();
}

export function hideCustomTipField() {
  // Hide custom-tip div
  document
    .querySelector(`#${inputCardId} .custom-tip`)
    .classList.add("accessibility-safe-hide");

  // Show custom-tip-radio div
  document
    .querySelector(`#${inputCardId} .custom-tip-radio`)
    .classList.remove("accessibility-safe-hide");
}

function watchCustomTip() {
  document
    .getElementById(customTipId)
    .addEventListener("change", () => showCustomTipField());

  document
    .querySelectorAll(`#${inputCardId} input[type=radio]:not(#tip-custom)`)
    .forEach((el) => {
      el.addEventListener("change", () => hideCustomTipField());
    });
}

/*
    Number of People
*/

function getNumPeople() {
  return document.getElementById(numPeopleId).value;
}

/*
  Input Card Setup
*/

export function watch() {
  watchBilledAmount();
  watchCustomTip();
}
