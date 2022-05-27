const submitForm = document.querySelector('.login-form');
const submitButton = document.querySelector('button');
const emailField = document.querySelector('input[type="email"]').value;
const passwordField = document.querySelector('input[type="password"]').value;

let user = {
    email: '',
    password: '',
};

function formReset() {
    document.querySelector('.login-form').reset()
};

submitForm.addEventListener('submit', formReset => {
    if(emailField || passwordField === '') {
        alert('All fields must be filled!!!');
    } else {
        user.email = emailField;
        user.password = passwordField;
    }

    return user;
});


