/**
 * 1. Use comments
 * 2. Func name `correct` is too generalized. Name funcs using verbs like `resetFormState`
 * 3. Try to use strict equal `===` instead of usual equal `==`
 * 4. It's better to use `querySelector` method to get DOM element
 * 5. Take out useful code, variables, etc.
 * 6. Use grammatically correct names, comments, etc.: write `password_line` instead of `line_password`
 * 7. Use exact selectors as you can, but without fanaticism
 * 8. Try to write together code with same logic: change `elFormMessage` properties in a row
 * 9. `correct` (`resetFormState`) method is called every click on form's input. It's better to process it's code once
 * 10. All editable data should be took out from code to global constants at the top like you do in LESS files
 **/

//
// Auth form
//

// Settings
const validUsername = 'kate';
const validPassword = '123';
const nextUrlAfterSuccessSubmit = "../Task 1 - User Page/index.html";
// Submit Messages
const msgLoginPassEmpty = 'Введите логин и пароль';
const msgLoginEmpty = 'Введите логин';
const msgPassEmpty = 'Введите пароль';
const msgAuthFail = 'Неправильный логин/пароль';
// Elements
const elLogin = document.querySelector("form#auth input#login");
const elLoginLine = document.querySelector("form#auth div#line_login");
const elPassword = document.querySelector("form#auth input#password");
const elPasswordLine = document.querySelector("form#auth div#line_password");
const elFormMessage = document.querySelector("form#auth div#wrong");
// Classes
const clTextInputError = 'placeholder-error';
// Functions
function  resetFormState() {
    elLogin.classList.remove(clTextInputError);
    elPassword.classList.remove(clTextInputError);
    elPasswordLine.classList.remove(clTextInputError);
    elLoginLine.classList.remove(clTextInputError);
    elFormMessage.style.visibility = "hidden";
}
function submitForm() {
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