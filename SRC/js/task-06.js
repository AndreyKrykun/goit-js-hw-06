const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
    validationInput.value.length === 6 ? 
    validationInput.style.borderColor = '#4caf50' :
    validationInput.style.borderColor = '#f44336';

});
