function setCustomValidaty() {
    let login = document.getElementById("login");
    login.addEventListener("input", function (event) {
        if (login.validity.typeMismatch) {
            login.setCustomValidity("Введите логин");
        } else {
            login.setCustomValidity("");
        }
    });

    let password = document.getElementById("password");
    password.addEventListener("input", function (event) {
        if (password.validity.typeMismatch) {
            password.setCustomValidity("Введите пароль");
        } else {
            password.setCustomValidity("");
        }
    });
}

setCustomValidaty();