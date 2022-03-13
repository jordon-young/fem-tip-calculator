import * as display_card from "./display_card.js";
import * as input_card from "./input_card.js";

/*
    Calculations
*/
function calculateTip(data) {
  const tipTotal = data.amountBilled * data.tipPercent;
  const total = data.amountBilled + tipTotal;
  return [tipTotal, total];
}

/*
    Form Change
*/
function handleFormChange() {
  const data = input_card.getFormData();

  if (data == null) {
    console.warn("Data is invalid!");
    display_card.displayOutput(display_card.TIP_OUTPUT_ID, null);
    display_card.displayOutput(display_card.TOTAL_OUTPUT_ID, null);
    return;
  } else {
    console.log(data);
  }

  const [tipTotal, total] = calculateTip(data);
  display_card.displayOutput(display_card.TIP_OUTPUT_ID, tipTotal / data.numberOfPeople);
  display_card.displayOutput(display_card.TOTAL_OUTPUT_ID, total / data.numberOfPeople);
}

/*
    Form Reset
*/
function resetForm(formId) {
  input_card.reset();
  display_card.reset();

  document.getElementById(formId).addEventListener("input", display_card.enableResetButton, { once: true });
}

/*
    Initialize Tip Calculator Listeners
*/
export function watch(formId = "tip-calculator") {
  const form = document.getElementById(formId);

  form.addEventListener("input", handleFormChange);
  form.addEventListener("change", handleFormChange);
  form.addEventListener("reset", () => resetForm(formId));
  form.addEventListener("input", display_card.enableResetButton, { once: true });

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
