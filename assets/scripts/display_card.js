export const DISPLAY_CARD_ID = "display-card",
  TIP_OUTPUT_ID = "tip-amount",
  TOTAL_OUTPUT_ID = "total-amount",
  FONT_SIZE_PER_CH = 1.6;

export function displayOutput(id, amount = 0) {
  if(id == null || id == undefined) return;
  const output = document.getElementById(id);

  let max;
  switch(id) {
    case TIP_OUTPUT_ID:
      max = 1000999999999;
      break;
    case TOTAL_OUTPUT_ID:
      max = 10000099999999999;
      break;
    default:
      max = 0;
      break;
  }

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
    output.style.fontSize = "inherit";
  }

  const calculatedFontSize = output.clientWidth / displayText.length * FONT_SIZE_PER_CH / 10;

  if (calculatedFontSize < 3.2){
    console.log(calculatedFontSize);
    output.style.fontSize = calculatedFontSize + "rem";
  } else {
    output.style.fontSize = "inherit";
  }

  output.value = displayText;
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
