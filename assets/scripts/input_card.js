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
  },
};

/*
    Input Validation and Error Messages
*/

function displayErrorMessage(event) {
  if (event.target.validity.valid) return;

  const alert = document.querySelector(`label[role=alert][for=${event.target.id}]`);
  let errorMessage = "";

  for (const [state, description] of Object.entries(VALIDITY_STATES[event.target.id])) {
    if (event.target.validity[state]) {
      errorMessage = description;
      console.warn(`Invalid input on #${event.target.id}!\n`, `State: ${state}\n`, `Description: ${description}`);

      break;
    }
  }

  alert.innerText = errorMessage;
}

function removeErrorMessage(event) {
  if (event.target.validity.valid == false) return;

  const alert = document.querySelector(`label[role=alert][for=${event.target.id}]`);
  alert.innerText = "";
}

export function removeAllErrorMessages() {
  const elements = document.querySelectorAll(`#${INPUT_CARD_ID} label[role=alert]`);
  elements.forEach((element) => (element.innerText = ""));
}

function updateValidityMessage(event) {
  event.target.checkValidity() ? removeErrorMessage(event) : displayErrorMessage(event);
}

/*
    Amount Billed 
*/

function formatAmountBilled(event) {
  const value = event.target.value;
  if (value == "" || isNaN(value)) return;

  event.target.value = (+value).toFixed(2);
  event.target.dispatchEvent(new Event("input", { bubbles: true }));
}

function getAmountBilled() {
  const input = document.getElementById(AMOUNT_BILLED_ID);
  if (input == null) return;

  return +input.value;
}

function watchBilledAmount() {
  const input = document.getElementById(AMOUNT_BILLED_ID);

  input.addEventListener("input", updateValidityMessage);
  input.addEventListener("blur", formatAmountBilled);
}

/*
    Custom Tip Field
*/

function showCustomTipField() {
  const customTipWrapper = document.querySelector(`#${INPUT_CARD_ID} .custom-tip`);
  customTipWrapper.classList.remove("hidden");

  const customTipField = document.getElementById(CUSTOM_TIP_ID);
  customTipField.setAttribute("type", "number");
  customTipField.dispatchEvent(new Event("input", { bubbles: true })); // Dispatching 'input' Event Updates Validity
  customTipField.focus();
}

export function hideCustomTipField() {
  const customTipWrapper = document.querySelector(`#${INPUT_CARD_ID} .custom-tip`);
  customTipWrapper.classList.add("hidden");

  const customTipField = document.getElementById(CUSTOM_TIP_ID);
  customTipField.setAttribute("type", "hidden");

  // Dispatching 'input' Event Updates Validity
  // A hidden input will always be valid.
  customTipField.dispatchEvent(new Event("input", { bubbles: true }));
}

function getTipPercent() {
  const checkedRadio = document.querySelector("input[type=radio][name=tip-percent]:checked");
  if (checkedRadio == null) return 0;

  let tipPercent;
  if (checkedRadio.value == "custom") {
    tipPercent = document.getElementById(CUSTOM_TIP_ID).value / 100; // If value is "", the result is 0.
  } else {
    tipPercent = +checkedRadio.value; // These are hard-coded, so they will always be valid.
  }
  return tipPercent;
}

function watchCustomTip() {
  const customTipField = document.getElementById(CUSTOM_TIP_ID);
  customTipField.addEventListener("input", updateValidityMessage);

  const customTipRadio = document.getElementById("tip-custom");
  customTipRadio.addEventListener("change", showCustomTipField);

  // Hide Custom Tip Field when Any Other Tip Radio is Selected
  document.querySelectorAll(`#${INPUT_CARD_ID} input[type=radio]:not(#tip-custom)`).forEach((el) => {
    el.addEventListener("change", hideCustomTipField);
  });
}

/*
    Number of People
*/

function getNumPeople() {
  const input = document.getElementById(NUMBER_OF_PEOPLE_ID);
  if (input == null) return;

  return input.value ? input.value : 1;
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

  for (let key in data) {
    let value = data.key;
    if (value == "undefined") {
      console.warn("Form is valid, but data is undefined!");
      return;
    }
  }

  return data;
}

/*
    Manually Reset Each Input ()
*/
export function reset() {
  const numberInputs = document.querySelectorAll(`#${INPUT_CARD_ID} input:not([type=radio], [type=reset])`);
  const radioInputs = document.querySelectorAll(`#${INPUT_CARD_ID} input[type=radio]`);

  numberInputs.forEach((input) => (input.value = ""));
  radioInputs.forEach((input) => input.removeAttribute("checked"));

  removeAllErrorMessages();
  hideCustomTipField();
}

/*
    Input Card Setup
*/

export function watch() {
  watchBilledAmount();
  watchCustomTip();
  watchNumPeople();
}
