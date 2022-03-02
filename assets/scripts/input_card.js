const inputCardId = "input-card",
  amountBilledId = "amount-billed",
  customTipId = "custom-tip",
  numPeopleId = "number-of-people";

/*
    Amount Billed 
*/

function getAmountBilled() {
  const input = document.getElementById(amountBilledId);
  let amountBilled = null;
  if (input.checkValidity() || !isNaN(input.value)) {
    amountBilled = +input.value;
  }
  return amountBilled;
}

function formatAmountBilled(e) {
  if (e.target.checkValidity() || !isNaN(e.target.value)) {
    e.target.value = (+e.target.value).toFixed(2);
  }
  e.target.dispatchEvent(new Event("input", { bubbles: true }));
}

function watchBilledAmount() {
  document.getElementById(amountBilledId).addEventListener("blur", (e) => formatAmountBilled(e));
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
  document.querySelector(`#${inputCardId} .custom-tip`).classList.remove("accessibility-safe-hide");

  // Focus custom-tip input
  document.getElementById(customTipId).focus();
}

export function hideCustomTipField() {
  // Hide custom-tip div
  document.querySelector(`#${inputCardId} .custom-tip`).classList.add("accessibility-safe-hide");

  // Show custom-tip-radio div
  document
    .querySelector(`#${inputCardId} .custom-tip-radio`)
    .classList.remove("accessibility-safe-hide");
}

function getTipPercentage() {
  const checkedRadio = document.querySelector("input[type=radio][name=tip-percent]:checked"),
    customTipField = document.getElementById(customTipId);
  let tipPercentage = 0;
  if (checkedRadio !== null && checkedRadio.value !== "custom") {
    console.log(checkedRadio.value);
    tipPercentage = +checkedRadio.value;
  } else if (customTipField.checkValidity() && customTipField.value !== "") {
    tipPercentage = customTipField.value / 100;
  }
  return tipPercentage;
}

function watchCustomTip() {
  document.getElementById("tip-custom").addEventListener("change", () => showCustomTipField());

  document.querySelectorAll(`#${inputCardId} input[type=radio]:not(#tip-custom)`).forEach((el) => {
    el.addEventListener("change", () => hideCustomTipField());
  });
}

/*
    Number of People
*/

function getNumPeople() {
  const input = document.getElementById(numPeopleId);
  let numPeople = 1;
  if (input.checkValidity() && input.value !== "") {
    numPeople = +input.value;
  }
  return numPeople;
}

function formatNumPeople(e) {
  if (e.target.value == "") {
    e.target.value = 1;
  } else if (!isNaN(e.target.value)) {
    e.target.value = (+e.target.value).toFixed();
  }
  e.target.dispatchEvent(new Event("input", { bubbles: true }));
}

function watchNumPeople() {
  document.getElementById(numPeopleId).addEventListener("blur", (e) => formatNumPeople(e));
}

/*
    Get Form Data for Calculations
*/

export function getFormData() {
  const data = {
    amountBilled: getAmountBilled(),
    tipPercentage: getTipPercentage(),
    numberOfPeople: getNumPeople(),
  };
  return data;
}

/*
  Input Card Setup
*/

export function watch() {
  watchBilledAmount();
  watchCustomTip();
  watchNumPeople();
}
