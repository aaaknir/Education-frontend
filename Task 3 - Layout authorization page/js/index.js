function submitClick() {
    if (!document.getElementById("login").value && !document.getElementById("password").value) {
        document.getElementById("wrong").innerHTML = "Введите логин и пароль";
        document.getElementById("login").classList.add('placeholder-error');
        document.getElementById("password").classList.add('placeholder-error');
        document.getElementById("line_password").classList.add('placeholder-error');
        document.getElementById("line_login").classList.add('placeholder-error');
        document.getElementById("wrong").style.visibility = "visible";
    } else if (!document.getElementById("login").value) {
        document.getElementById("wrong").innerHTML = "Введите логин";
        document.getElementById("login").classList.add('placeholder-error');
        document.getElementById("line_login").classList.add('placeholder-error');
        document.getElementById("wrong").style.visibility = "visible";
    } else if (!document.getElementById("password").value) {
        document.getElementById("wrong").innerHTML = "Введите пароль";
        document.getElementById("password").classList.add('placeholder-error');
        document.getElementById("line_password").classList.add('placeholder-error');
        document.getElementById("wrong").style.visibility = "visible";
    } else if (document.getElementById("login").value == "kate" && document.getElementById("password").value == "123") {
        window.location.href = "../Task 1 - User Page/index.html";
    } else {
        document.getElementById("wrong").innerHTML = "Неправильный логин/пароль";
        document.getElementById("wrong").style.visibility = "visible";
    }
}

function  correct() {
    document.getElementById("login").classList.remove('placeholder-error');
    document.getElementById("password").classList.remove('placeholder-error');
    document.getElementById("line_password").classList.remove('placeholder-error');
    document.getElementById("line_login").classList.remove('placeholder-error');
    document.getElementById("wrong").style.visibility = "hidden";
}