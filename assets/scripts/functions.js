
/*
    Currency & Calculations

    Formatting
    Tip Calculation
    Form Output Setters
*/


function calculateTip(data) {
  return data.billedAmount * data.tipPercent;
}


/* 
    
    Getting Form Data

    This need refactored.

*/

function getFormData() {
  const form = document.getElementById('tip-calculator');

  let billedAmount;
  try {
    let inputBilledAmount = form.querySelector('#billed-amount');
    billedAmount = +inputBilledAmount.value;
  } catch (err) {
    console.error('#billed-amount could not be found in the form...');
  }

  let tipPercent;
  try {
    let inputTipPercentage = form.querySelector('input[name="tip-percent"]:checked');
    if (inputTipPercentage.value == 'custom') {
      tipPercent = form.querySelector('#custom-tip').value / 100;
    } else {
      tipPercent = +inputTipPercentage.value;
    }
  } catch {
    tipPercent = 0;
  }
  let numberOfPeople;
  try {
    numberOfPeople = +form.querySelector('#number-of-people').value;
    if (numberOfPeople < 1) {
      numberOfPeople = 1;
    }
  } catch (err) {
    console.error('#number-of-people could not be found in form...');
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

  setTipAmount(tipAmount);
  setTotalAmount(totalAmount);
  enableResetButton();
}


