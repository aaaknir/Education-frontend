// Auth form

// Settings
const validUsername = 'kate';
const validPassword = '123';
const nextUrlAfterSuccessSubmit = "../Task 3 - Account/index.html";
// Submit Messages
const msgLoginPassEmpty = 'Введите логин и пароль';
const msgLoginEmpty = 'Введите логин';
const msgPassEmpty = 'Введите пароль';
const msgAuthFail = 'Неправильный логин/пароль';
// Elements
const elLogin = document.querySelector("form#auth input#login");
const elLoginLine = document.querySelector("form#auth div#login_line");
const elPassword = document.querySelector("form#auth input#password");
const elPasswordLine = document.querySelector("form#auth div#password_line");
const elFormMessage = document.querySelector("form#auth div#wrong");
// Classes
const clTextInputError = 'placeholder-error';
// Functions
function  resetFormState () {
    elLogin.classList.remove(clTextInputError);
    elPassword.classList.remove(clTextInputError);
    elPasswordLine.classList.remove(clTextInputError);
    elLoginLine.classList.remove(clTextInputError);
    elFormMessage.style.visibility = "hidden";
}

function submitForm () {
    if (!elLogin.value && !elPassword.value) {
        // Login & Pass are empty
        elFormMessage.innerHTML = msgLoginPassEmpty;
        elFormMessage.style.visibility = "visible";
        elLogin.classList.add(clTextInputError);
        elPassword.classList.add(clTextInputError);
        elPasswordLine.classList.add(clTextInputError);
        elLoginLine.classList.add(clTextInputError);
    } else if (!elLogin.value) {
        // Login is empty
        elFormMessage.innerHTML = msgLoginEmpty;
        elFormMessage.style.visibility = "visible";
        elLogin.classList.add(clTextInputError);
        elLoginLine.classList.add(clTextInputError);
    } else if (!elPassword.value) {
        // Pass is empty
        elFormMessage.innerHTML = msgPassEmpty;
        elFormMessage.style.visibility = "visible";
        elPassword.classList.add(clTextInputError);
        elPasswordLine.classList.add(clTextInputError);
    } else if (elLogin.value === validUsername && elPassword.value === validPassword) {
        // Success auth
        window.location.href = nextUrlAfterSuccessSubmit;
    } else {
        // Failed auth
        elFormMessage.innerHTML = msgAuthFail;
        elFormMessage.style.visibility = "visible";
    }
    return false; // Prevent form submit
}