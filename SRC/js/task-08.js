let submitForm = document.querySelector('.login-form');
let submitButton = document.querySelector('button');

let user = {
    email: '',
    password: '',
};

function formReset() {
    document.querySelector('.login-form').reset();
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    let emailField = document.querySelector('input[type="email"]').value;
    let passwordField = document.querySelector('input[type=password]').value;

    if(emailField === "" || passwordField === "") {
        alert('All fields must be filled!!!');
        return;
    } 

    user.email = emailField;
    user.password = passwordField;

    console.log(user);
    formReset();
})

