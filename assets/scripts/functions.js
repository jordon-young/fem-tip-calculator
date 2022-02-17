
/*
    Custom Tip Field
    
    Show / Hide Helpers
    Setup Functionality 
*/

function showCustomTipField() {
  document.getElementById('customTip').removeAttribute('hidden');
}

function hideCustomTipField() {
  document.getElementById('customTip').setAttribute('hidden', 'true');
}

export function setupCustomTipFieldListeners() {
  document.getElementById('tipCustom').addEventListener('change', () => showCustomTipField());

  document.querySelectorAll('input[type=radio]:not(#tipCustom)').forEach(el => {
    el.addEventListener('change', () => hideCustomTipField());
  });
}

/*
    Currency & Calculations

    Formatting
    Tip Calculation
    Form Output Setters
*/

function formatCurrency(amount) {
  return (+amount).toFixed(2);
}

// Format Input on Focus Out
export function billedAmountOnFocusOut() {
  const el = document.querySelector('#billedAmount');
  if (el.value > 0) {
    el.value = formatCurrency(el.value);
  }
}

function calculateTip(data) {
  return data.billedAmount * data.tipPercent;
}

function setTipAmount(amount) {
  document.getElementById('tipAmount').innerText = '$' + formatCurrency(amount);
}

function setTotalAmount(amount) {
  document.getElementById('totalAmount').innerText = '$' + formatCurrency(amount);
}

/* 
    
    Getting Form Data

    This need refactored.

*/

function getFormData() {
  const form = document.getElementById('tipCalculator');

  let billedAmount;
  try {
    let inputBilledAmount = form.querySelector('#billedAmount');
    billedAmount = +inputBilledAmount.value;
  } catch (err) {
    console.error('#billedAmount could not be found in the form...');
  }

  let tipPercent;
  try {
    let inputTipPercentage = form.querySelector('input[name="tipPercent"]:checked');
    if (inputTipPercentage.value == 'custom') {
      tipPercent = form.querySelector('#customTip').value / 100;
    } else {
      tipPercent = +inputTipPercentage.value;
    }
  } catch {
    tipPercent = 0;
  }
  let numberOfPeople;
  try {
    numberOfPeople = +form.querySelector('#numberOfPeople').value;
    if (numberOfPeople < 1) {
      numberOfPeople = 1;
    }
  } catch (err) {
    console.error('#numberOfPeople could not be found in form...');
  }

  return { billedAmount, tipPercent, numberOfPeople };
}

/*

    Page Update Logic

    OnFocusOut works well for formatting input fields.

    *Factor out calculations and possibly output setting*
    *Refactor getFormData() for individual fields first*

*/

export function handleFormChange() {
  const data = getFormData();
  let tipAmount = 0, totalAmount = 0;

  try {
    tipAmount = calculateTip(data) / data.numberOfPeople;
    totalAmount = tipAmount + data.billedAmount / data.numberOfPeople;
  } catch (err) {
    console.error('Something went wrong with the calculation...');
  }

  setTipAmount(formatCurrency(tipAmount));
  setTotalAmount(formatCurrency(totalAmount));
  enableResetButton();
}

/*
    Setup & Resets
*/

function enableResetButton(){
  document.querySelector('input[type="reset"').removeAttribute('disabled');
}

function disableResetButton(){
  document.querySelector('input[type="reset"').setAttribute('disabled', 'true');
}

export function resetForm() {
  hideCustomTipField();
  disableResetButton();

  document.querySelectorAll('output').forEach(el => {
    el.innerText = '$0.00';
  });
}

