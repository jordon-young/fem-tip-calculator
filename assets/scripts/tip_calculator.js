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
function handleFormChange(){

}

/*
    Calculations
*/
function calculateTip() {
  input_card.getData();
}

/*
    Initialize Tip Calculator Listeners
*/
export function watch(formId = "tip-calculator") {
  const form = document.getElementById(formId);
  
  form.addEventListener("input", () => {
    display_card.enableResetButton();
  });

  form.addEventListener("reset", () => resetForm());

  // Input Formatting on Blur
  input_card.watch();
}
