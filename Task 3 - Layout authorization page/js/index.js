function submitClick() {
    if (!document.getElementById("login").value && !document.getElementById("password").value) {
        document.getElementById("wrong").innerHTML = "Введите логин и пароль";
        document.getElementById("login").style.color ="#D51A1A";
        document.getElementById("password").style.color = "#D51A1A";
        document.getElementById("line_password").style.borderColor = "#D51A1A";
        document.getElementById("line_login").style.borderColor = "#D51A1A";
        document.getElementById("wrong").style.visibility = "visible";
    } else if (!document.getElementById("login").value) {
        document.getElementById("wrong").innerHTML = "Введите логин";
        document.getElementById("login").style.color = "#D51A1A";
        document.getElementById("line_login").style.borderColor = "#D51A1A";
        document.getElementById("wrong").style.visibility = "visible";
    } else if (!document.getElementById("password").value) {
        document.getElementById("wrong").innerHTML = "Введите пароль";
        document.getElementById("password").style.pcolor = "#D51A1A";
        document.getElementById("line_password").style.borderColor = "#D51A1A";
        document.getElementById("wrong").style.visibility = "visible";
    } else if (document.getElementById("login").value == "kate" && document.getElementById("password").value == "123") {
        window.location.href = "../'Task 1 - User Page'/index.html";
    } else {
        document.getElementById("wrong").innerHTML = "Неправильный логин/пароль";
        document.getElementById("wrong").style.visibility = "visible";
    }
}

function  correct() {
    document.getElementById("login").style.color ="#CDCDCD";
    document.getElementById("password").style.color = "#CDCDCD";
    document.getElementById("line_password").style.borderColor = "#000000";
    document.getElementById("line_login").style.borderColor = "#000000";
    document.getElementById("wrong").style.visibility = "hidden";
}