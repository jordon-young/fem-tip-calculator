import {
  setupCustomTipFieldListeners,
  billedAmountOnFocusOut,
  handleFormChange,
  resetForm
} from '/assets/scripts/functions.js';

/* 

    Setup

*/

/* Set Event Listeners */
document.getElementById('tipCalculator').addEventListener('input', () => handleFormChange());
document.getElementById('billedAmount').addEventListener('focusout', () => billedAmountOnFocusOut());
setupCustomTipFieldListeners();


// Form Reset Button
document.querySelector('form').addEventListener('reset', () => resetForm());