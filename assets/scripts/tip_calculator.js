import * as display_card from "./display_card.js";
import * as input_card from "./input_card.js";

/*
    Form Reset
*/
function resetForm(formId) {
  display_card.disableResetButton();

  input_card.removeAllErrorMessages();
  input_card.hideCustomTipField();

  display_card.resetOutputFontSize(display_card.TIP_OUTPUT_ID);
  display_card.resetOutputFontSize(display_card.TOTAL_OUTPUT_ID);
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

  if(data == null) {
    display_card.displayOutput(display_card.TIP_OUTPUT_ID);
    display_card.displayOutput(display_card.TOTAL_OUTPUT_ID);
    return;
  };

  const tipTotal = data.amountBilled * data.tipPercent;
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
  form.addEventListener("reset", () => resetForm(formId));

  // Refit output text when element is resized
  window.onresize = () => {
    clearTimeout();
    setTimeout(() => {
      display_card.fitOutputText(display_card.TIP_OUTPUT_ID);
      display_card.fitOutputText(display_card.TOTAL_OUTPUT_ID);
    }, 150); // Debouncing to prevent unnecessary updates
  };

  // Input Formatting on Blur
  input_card.watch();
}
