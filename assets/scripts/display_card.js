export const DISPLAY_CARD_ID = "display-card",
  TIP_OUTPUT_ID = "tip-amount",
  TOTAL_OUTPUT_ID = "total-amount",
  FONT_SIZE_PER_CH = 1.6;

/*
    Setup & Reset
*/
export function enableResetButton() {
  document
    .querySelector(`#${DISPLAY_CARD_ID} input[type=reset]`)
    .removeAttribute("disabled");
}

export function disableResetButton() {
  document
    .querySelector(`#${DISPLAY_CARD_ID} input[type=reset]`)
    .setAttribute("disabled", "true");
}

export function resetOutputFontSize(id) {
  const output = document.getElementById(id);
  if (output == null) {
    console.warm(`resetOutputFontSize(${id}) not found. Cannot reset.`);
  } else {
    output.style.removeProperty("font-size");
  }
}

/*
    Responsively Fit Output Font-Size Based on Output Value Length
*/
export function fitOutputText(id) {
  const output = document.getElementById(id);

  const calculatedFontSize =
    ((output.clientWidth / output.value.length) * FONT_SIZE_PER_CH) / 10;

  const maxFontSize =
    parseInt(
      window // Only styles programmatically added to the DOM can be found on Document.element.styles.
        .getComputedStyle(document.querySelector(`#${DISPLAY_CARD_ID} > div`))
        .getPropertyValue("font-size"),
      10 // Base 10
    ) / 10;

  if (2.4 < calculatedFontSize && calculatedFontSize < maxFontSize) {
    output.style.fontSize = calculatedFontSize + "rem";
  } else {
    output.style.removeProperty("font-size");
  }
}

/*
    Formats and Sets Output Value if:
      - amount is less than max allowed
      - amount is not null (error)
*/
export function displayOutput(id, amount) {
  const output = document.getElementById(id);
  if (output == null) return;

  let max;
  switch (id) {
    case TIP_OUTPUT_ID:
      max = 1000000;
      break;
    case TOTAL_OUTPUT_ID:
      max = 10000000;
      break;
    default:
      console.warn("Output not found...");
      return;
  }

  let displayText;
  if (amount == null) {
    displayText = "Error";
  } else if (amount < max) {
    displayText = amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  } else {
    displayText = "Overflow";
  }

  output.value = displayText;
  fitOutputText(id);
}
