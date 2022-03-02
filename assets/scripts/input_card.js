const INPUT_CARD_ID = "input-card",
  AMOUNT_BILLED_ID = "amount-billed",
  CUSTOM_TIP_ID = "custom-tip",
  NUMBER_OF_PEOPLE_ID = "number-of-people";

/*
    Amount Billed 
*/

function getAmountBilled() {
  const input = document.getElementById(AMOUNT_BILLED_ID);
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
  document.getElementById(AMOUNT_BILLED_ID).addEventListener("blur", (e) => formatAmountBilled(e));
}

/*
    Custom Tip Field
*/

function showCustomTipField() {
  // Hide custom-tip-radio div
  document
    .querySelector(`#${INPUT_CARD_ID} .custom-tip-radio`)
    .classList.add("accessibility-safe-hide");

  // Show custom-tip div
  document.querySelector(`#${INPUT_CARD_ID} .custom-tip`).classList.remove("accessibility-safe-hide");

  // Focus custom-tip input
  document.getElementById(CUSTOM_TIP_ID).focus();
}

export function hideCustomTipField() {
  // Hide custom-tip div
  document.querySelector(`#${INPUT_CARD_ID} .custom-tip`).classList.add("accessibility-safe-hide");

  // Show custom-tip-radio div
  document
    .querySelector(`#${INPUT_CARD_ID} .custom-tip-radio`)
    .classList.remove("accessibility-safe-hide");
}

function getTipPercentage() {
  const checkedRadio = document.querySelector("input[type=radio][name=tip-percent]:checked"),
    customTipField = document.getElementById(CUSTOM_TIP_ID);

  let tipPercentage = 0;

  if (checkedRadio !== null && checkedRadio.value !== "custom") {
    console.log(checkedRadio.value);
    tipPercentage = +checkedRadio.value;
  } else if (customTipField.checkValidity() && customTipField.value !== "") {
    tipPercentage = customTipField.value / 100;
  }
  return tipPercentage;
}

function formatCustomTip(e){
  if (e.target.checkValidity() == false) e.target.value = undefined;
}

function watchCustomTip() {
  document.getElementById("tip-custom").addEventListener("change", () => showCustomTipField());

  document.getElementById(CUSTOM_TIP_ID).addEventListener("blur", (e) => formatCustomTip(e));

  document.querySelectorAll(`#${INPUT_CARD_ID} input[type=radio]:not(#tip-custom)`).forEach((el) => {
    el.addEventListener("change", () => hideCustomTipField());
  });
}

/*
    Number of People
*/

function getNumPeople() {
  const input = document.getElementById(NUMBER_OF_PEOPLE_ID);
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
  const input = document.getElementById(NUMBER_OF_PEOPLE_ID);
  input.addEventListener("blur", (e) => formatNumPeople(e));
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
