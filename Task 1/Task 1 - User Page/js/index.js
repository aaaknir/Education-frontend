function display_on () {
    document.getElementById("mainArticle").style.display = "grid";
    document.getElementById("pageHeader").style.display = "block";
}

function display_off () {
    document.getElementById("mainArticle").style.display = "none";
    document.getElementById("pageHeader").style.display = "none";
}

function photo_change () {
    document.getElementById("photo_change").style.display ="block";
    display_off()
}

function photo () {
    document.getElementById('image').src = document.forms["data_for_form"].elements["photo"].value;
    document.getElementById("photo_change").style.display ="none";
    display_on()
}

function status_change () {
    document.getElementById("status_change").style.display = "block";
    display_off();
}

function status () {
    document.getElementById("status_quote").innerHTML = document.forms["data_for_form"].elements["status"].value;
    document.getElementById("status_change").style.display = "none";
    display_on();
}

function fio_change () {
    document.getElementById("fio_change").style.display = "block";
    display_off();
}

function fio() {
    document.getElementById("fio_letter").innerHTML = document.forms["data_for_form"].elements["surname"].value + " " + document.forms["data_for_form"].elements["name"].value + " " + document.forms["data_for_form"].elements["s_name"].value;
    document.getElementById("fio_change").style.display = "none";
    display_on();
}

function dr_change () {
    document.getElementById("dr_change").style.display = "block";
    display_off();
}

function dr() {
    let str = document.forms["data_for_form"].elements["date"].value.toString();
    document.getElementById("dr_letter").innerHTML = str[8] + str[9] + "." + str[5] + str[6] + "." + str[2] + str[3];
    document.getElementById("dr_change").style.display = "none";
    display_on();
}

function work_change () {
    document.getElementById("work_change").style.display = "block";
    display_off();
}

function work () {
    let a="";
    let c = 0;
    for(let i = 0; i < 29; i++) {
        if(document.forms["data_for_form"].elements[i].checked) {
            let b = document.forms["data_for_form"].elements[i].value;
            a = a + b + ", ";
            c++;
            if(c == 4) {
                a = a + "\n";
                c = 0;
            }
        }
    }
    a = a.substring(0, a.length - 2);
    document.getElementById("work_letter").innerHTML = a;
    document.getElementById("work_change").style.display = "none";
    display_on();
}

function hobby_change () {
    document.getElementById("hobby_change").style.display = "block";
    display_off();
}

function hobby () {
    document.getElementById("hobby_letter").innerHTML = document.forms["data_for_form"].elements["hobby"].value;
    document.getElementById("hobby_change").style.display = "none";
    display_on();
}

function vk_change () {
    document.getElementById("vk_change").style.display = "block";
    display_off();
}

function ajaxGet() {
    $.ajax({
        url: "vk.html",
        method: 'GET',
        success: function (html) {
            document.getElementById('image').src  = $(html).find(".page_avatar_img").attr('src');

            let reg_status = /<span class="current_text">(.+)<\/span><\/span><\/span>/;
            document.getElementById("status_quote").innerHTML = html.match(reg_status)[1];

            let reg_fio = /<h2 class="page_name">(.+)<\/h2>/;
            document.getElementById("fio_letter").innerHTML = html.match(reg_fio)[1];

            let reg_dr = /<div class="labeled">(.+)<\/div>/;
            document.getElementById("dr_letter").innerHTML = html.match(reg_dr)[1];
        }
    });
}

function vk() {
    ajaxGet();
    document.getElementById("vk_change").style.display = "none";
    display_on();
}


