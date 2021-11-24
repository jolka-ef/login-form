const forms =  [...document.getElementsByClassName('Form--novalidate')];
forms.forEach(form => form.setAttribute('novalidate', ''));


/**
 * Adds event handlers to the document.
 */
export function init() {
    document.addEventListener('blur', handleFieldValidation, false);
    document.addEventListener('submit', handleForm, false);
}


/**
 * Validates form.
 * @param {!Event} event The event associated with submit.
 */
function handleForm(event) {
    event.preventDefault();
    const target = event.target;
    const invalidField = target.querySelector(':invalid');
    if (invalidField ) {
        const invalidFields = target.querySelectorAll(':required:invalid:not(.Input--hasError)');
        invalidFields.forEach(field => showError(field));
        invalidField.focus();
    } else {
      const submitter = event.submitter;
       if(submitter.matches('[id="loginButton"]')) {
        showDialog(document.querySelector('[id="successDialog"]'))
      }
      else if(submitter.matches('[id="resetButton"]')) {
      showDialog(document.querySelector('[id="resetDialog"]'))
    }
  }
}



/**
 * Validates field.
 * @param {!Event} event The event associated with blur.
 */
function handleFieldValidation(event) {
    const target = event.target;

    if(target.matches(':invalid:not(.Input--hasError)')) {
        showError(target);
    }

    if(target.matches('.Input--hasError:valid')) {
        hideError(target);
    }
}


/**
 * Shows field error.
 * @param {!Element} target The object that dispatched the event.
 */
function showError(target) {
    const err = target.closest('.InputContainer').querySelector('.InputErrMsg');
    const name = target.getAttribute('name');

    target.setAttribute('aria-invalid', 'true');
    target.setAttribute('aria-describedby', name + 'ErrMsg');
    target.classList.add('Input--hasError');
    err.setAttribute('id', name + 'ErrMsg');
}


/**
 * Hides field error.
 * @param {!Element} target The object that dispatched the event.
 */
function hideError(target) {
    const err = target.closest('.InputContainer').querySelector('.Input-errMsg');

    target.removeAttribute('aria-invalid');
    target.removeAttribute('aria-describedby');
    target.classList.remove('Input--hasError');
    err.removeAttribute('id');
}


function showDialog(dialog){
    if (typeof dialog.showModal === "function") {
    dialog.showModal();
    } else {
    alert("The <dialog> API is not supported by this browser");
    }
}
