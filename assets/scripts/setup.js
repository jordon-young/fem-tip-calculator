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
document.getElementById('tip-calculator').addEventListener('input', () => handleFormChange());
document.getElementById('billed-amount').addEventListener('focusout', () => billedAmountOnFocusOut());
setupCustomTipFieldListeners();


// Form Reset Button
document.querySelector('form').addEventListener('reset', () => resetForm());