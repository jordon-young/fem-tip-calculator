export const DISPLAY_CARD_ID = "display-card",
  TIP_OUTPUT_ID = "tip-amount",
  TOTAL_OUTPUT_ID = "total-amount",
  FONT_SIZE_PER_CH = 1.6;


export function resetOutputFontSize(id) {
  const output = document.getElementById(id);
  if(output == null) {
    console.warm(`resetOutputFontSize(${id}) not found. Cannot reset.`);
  } else {
    output.style.removeProperty("font-size");
  }
}

export function fitOutputText(id) {
  const output = document.getElementById(id),
    displayText = output.value,
    calculatedFontSize = ((output.clientWidth / displayText.length) * FONT_SIZE_PER_CH) / 10,
    maxFontSize =
    parseInt(
      window
        .getComputedStyle(document.querySelector(`#${DISPLAY_CARD_ID} > div`))
        .getPropertyValue("font-size"),
      10
    ) / 10;

  if (2.4 < calculatedFontSize && calculatedFontSize < maxFontSize) {
    output.style.fontSize = calculatedFontSize + "rem";
  } else {
    output.style.removeProperty("font-size");
  }
}

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
    displayText = "💸💸💸";
  }

  output.value = displayText;
  fitOutputText(id);
}

/*
    Setup & Resets
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
