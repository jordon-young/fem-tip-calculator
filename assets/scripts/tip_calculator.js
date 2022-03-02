import * as display_card from "./display_card.js";
import * as input_card from "./input_card.js";

/*
    Form Reset
*/
function resetForm() {
  input_card.hideCustomTipField();
  display_card.disableResetButton();

  display_card.displayOutput(display_card.TIP_OUTPUT_ID);
  display_card.displayOutput(display_card.TOTAL_OUTPUT_ID);
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

  const tipTotal = data.amountBilled * data.tipPercentage;
  display_card.displayOutput(display_card.TIP_OUTPUT_ID, tipTotal / data.numberOfPeople);

  const total = data.amountBilled + tipTotal;
  display_card.displayOutput(display_card.TOTAL_OUTPUT_ID, total / data.numberOfPeople);
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
