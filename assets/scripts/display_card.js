export const DISPLAY_CARD_ID = "display-card",
  TIP_OUTPUT_ID = "tip-amount",
  TOTAL_OUTPUT_ID = "total-amount",
  FONT_SIZE_PER_CH = 1.6;

export function fitOutputText(id) {
  const output = document.getElementById(id),
    displayText = output.value;
  const calculatedFontSize = ((output.clientWidth / displayText.length) * FONT_SIZE_PER_CH) / 10;
  const maxFontSize =
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

export function displayOutput(id, amount = 0) {
  if (id == null || id == undefined) return;

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

  const output = document.getElementById(id);
  let displayText;

  if (max == 0 || amount < 0) {
    displayText = "Error";
  } else if (amount < max) {
    displayText = amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  } else {
    displayText = "💸💸💸";
    output.style.removeProperty("font-size");
  }

  output.value = displayText;
  fitOutputText(id);
}

/*
    Setup & Resets
*/

export function enableResetButton() {
  document.querySelector(`#${DISPLAY_CARD_ID} input[type=reset]`).removeAttribute("disabled");
}

export function disableResetButton() {
  document.querySelector(`#${DISPLAY_CARD_ID} input[type=reset]`).setAttribute("disabled", "true");
}
