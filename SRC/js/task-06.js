const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
    validationInput.value.length === parseInt((validationInput.getAttribute("data-length"))) ? 
    validationInput.style.borderColor = '#4caf50' :
    validationInput.style.borderColor = '#f44336';

});
