import * as display_card from "./display_card.js";
import * as input_card from "./input_card.js";

/*
    Form Reset
*/
function resetForm() {
  input_card.hideCustomTipField();
  display_card.disableResetButton();

  display_card.displayOutput(display_card.tipId);
  display_card.displayOutput(display_card.totalId);
}

/*
    Form Change
*/
function handleFormChange() {
  calculateTip();
  display_card.enableResetButton();
}

/*
    Calculations
*/
function calculateTip() {
  const data = input_card.getFormData();

  let tipTotal = 0;
  tipTotal = (data.amountBilled * data.tipPercentage) / data.numberOfPeople;
  display_card.displayOutput(display_card.tipId, tipTotal);

  let total = (data.amountBilled + tipTotal) / data.numberOfPeople;
  display_card.displayOutput(display_card.totalId, total);
}

/*
    Initialize Tip Calculator Listeners
*/
export function watch(formId = "tip-calculator") {
  const form = document.getElementById(formId);

  form.addEventListener("input", () => handleFormChange());
  form.addEventListener("reset", () => resetForm());

  // Input Formatting on Blur
  input_card.watch();
}
