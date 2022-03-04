const INPUT_CARD_ID = "input-card",
  AMOUNT_BILLED_ID = "amount-billed",
  CUSTOM_TIP_ID = "custom-tip",
  NUMBER_OF_PEOPLE_ID = "number-of-people";

const VALIDITY_STATES = {
  [AMOUNT_BILLED_ID]: {
    badInput: "Numbers Only",
    rangeOverflow: "Max Value: 1,000,000.00",
    rangeUnderflow: "Min Value: 0.00",
    stepMismatch: "Rounding to Nearest Cent",
  },
  [CUSTOM_TIP_ID]: {
    badInput: "Numbers Only",
    rangeOverflow: "Max Value: 100",
    rangeUnderflow: "Min Value: 0",
    stepMismatch: "Integers Only",
  },
  [NUMBER_OF_PEOPLE_ID]: {
    badInput: "Numbers Only",
    rangeOverflow: "Max Value: 100",
    rangeUnderflow: "Min Value: 1",
    stepMismatch: "Integers Only",
  }
};

/*
    Input Validation and Error Messages
*/

function displayErrorMessage(event){
  if (event.target.validity.valid) return;

  const alert = document.querySelector(`label[role=alert][for=${event.target.id}]`);
  const error_message = VALIDITY_STATES[event.target.id];
  let message = "";

  for (let constraint in error_message){
    if (event.target.validity[constraint]) {
      message = error_message[constraint];
      console.log(message);
      break;
    }
  }
  
  alert.innerText = message;
}

function removeErrorMessage(event){
  if (event.target.validity.valid == false) return;

  const alert = document.querySelector(`label[role=alert][for=${event.target.id}]`);
  alert.innerText = "";  
}

export function removeAllErrorMessages() {
  const elements = document.querySelectorAll(`#${INPUT_CARD_ID} label[role=alert]`);
  elements.forEach(element => element.innerText = "");
}

function updateValidityMessage(event) {
  event.target.checkValidity() ? removeErrorMessage(event) : displayErrorMessage(event);
}

/*
    Amount Billed 
*/

function getAmountBilled() {
  const input = document.getElementById(AMOUNT_BILLED_ID);
  let amountBilled = null;

  if (input.checkValidity() == false || !isNaN(input.value)) {
    amountBilled = +input.value;
  }

  return amountBilled;
}

function formatAmountBilled(event) {
  const value = event.target.value;
  if (isNaN(value)) return;

  event.target.value = (+value).toFixed(2);
  event.target.dispatchEvent(new Event("input", { bubbles: true }));
}

function watchBilledAmount() {
  const input = document.getElementById(AMOUNT_BILLED_ID);
  
  input.addEventListener("input", updateValidityMessage);
  input.addEventListener("blur", formatAmountBilled);
}

/*
    Custom Tip Field
*/

function getTipPercent() {
  const checkedRadio = document.querySelector("input[type=radio][name=tip-percent]:checked");
  if (checkedRadio == null) return 0;

  let tipPercent;
  if (checkedRadio.value == "custom") {
    tipPercent = document.getElementById(CUSTOM_TIP_ID).value / 100;
  } else {
    tipPercent = +checkedRadio.value;
  }
  return tipPercent;
}

function showCustomTipField() {
  // Display custom-tip div
  const customTipDiv = document.querySelector(`#${INPUT_CARD_ID} .custom-tip`);
  customTipDiv.classList.remove("hidden");
  customTipDiv.children[1].setAttribute("type", "number");

  // Focus custom-tip input
  document.getElementById(CUSTOM_TIP_ID).focus();
}

export function hideCustomTipField() {
  const customTipDiv = document.querySelector(`#${INPUT_CARD_ID} .custom-tip`);
  customTipDiv.classList.add("hidden");
  customTipDiv.children[1].setAttribute("type", "hidden");
}

function watchCustomTip() {
  const input = document.getElementById(CUSTOM_TIP_ID);
  input.addEventListener("input", updateValidityMessage);
  
  const customTipRadio = document.getElementById("tip-custom");
  customTipRadio.addEventListener("change", showCustomTipField);

  // Hide Custom Tip Field on Any Other Tip Radio Selection
  document.querySelectorAll(`#${INPUT_CARD_ID} input[type=radio]:not(#tip-custom)`).forEach((el) => {
    el.addEventListener("change", hideCustomTipField);
  });
}

/*
    Number of People
*/

function getNumPeople() {
  const input = document.getElementById(NUMBER_OF_PEOPLE_ID);
  return input.value;
}

function watchNumPeople() {
  const input = document.getElementById(NUMBER_OF_PEOPLE_ID);
  input.addEventListener("input", updateValidityMessage);
}

/*
    Get Form Data for Calculations
*/

export function getFormData() {
  if (document.getElementById(INPUT_CARD_ID).parentElement.checkValidity() == false) return null;

  const data = {
    amountBilled: getAmountBilled(),
    tipPercent: getTipPercent(),
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