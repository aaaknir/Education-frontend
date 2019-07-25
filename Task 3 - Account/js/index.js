// Account Page

// Settings
const urlForUploadVkInfo = "html/vk.html";
// Elements
const elBody = document.querySelector("body");
const elArticle = document.querySelector("article");
const elHeader = document.querySelector("header");
const elPhoto = document.querySelector("article div.left div#photo #image");
const elPhotoChange = document.querySelector("div.change div#photo_change");
const elPhotoFromForm = document.querySelector("div.change div#photo_change input");
const elStatusBlock = document.querySelector("article div.left div#status");
const elStatus = document.querySelector("article div.left div#status span#status_quote");
const elStatusChange = document.querySelector("div.change div#status_change");
const elStatusFromForm = document.querySelector("div.change div#status_change input");
const elFio = document.querySelector("article div.right div#fio span#fio_letter");
const elFioChange = document.querySelector("div.change div#fio_change");
const elSurnameFromForm = document.querySelector("div.change div#fio_change input#surname");
const elNameFromForm = document.querySelector("div.change div#fio_change input#name");
const elSecondNameFromForm = document.querySelector("div.change div#fio_change input#second_name");
const elBirthdayDate = document.querySelector("article div.right div#birthday span#dr_letter");
const elBirthdayDateChange = document.querySelector("div.change div#birthday_change");
const elBirthdayDateFromForm = document.querySelector("div.change div#birthday_change input");
const elBlock = document.querySelector("article div.right div#about div#block span#block_letter");
const elBlockChange = document.querySelector("div.change div#block_change");
const elHobby = document.querySelector("article div.right div#about div#hobby span#hobby_letter");
const elHobbyChange = document.querySelector("div.change div#hobby_change");
const elHobbyFromForm = document.querySelector("div.change div#hobby_change textarea");
const elVkUpload = document.querySelector("div.change div#vk_upload");
// Classes
const clBodyBackground = 'change_color';
// Functions
function displayOn () {
    elArticle.style.display = "grid";
    elHeader.style.display = "block";
    elBody.classList.remove(clBodyBackground);
}

function displayOff () {
    elArticle.style.display = "none";
    elHeader.style.display = "none";
    elBody.classList.add(clBodyBackground);
}

function changePhoto () {
    elPhotoChange.style.display ="block";
    displayOff()
}

function savePhoto (i) {
    if (i) {
        elPhoto .src = elPhotoFromForm .value;
    }
    elPhotoChange.style.display ="none";
    displayOn()
}

function changeStatus () {
    elStatusChange.style.display = "block";
    displayOff();
}

function saveStatus (i) {
    if (i) {
        elStatus.innerHTML = elStatusFromForm.value;
    }
    elStatusChange.style.display = "none";
    displayOn();
}

function changeFio () {
    elFioChange.style.display = "block";
    displayOff();
}

function saveFio (i) {
    if (i) {
        elFio.innerHTML = elSurnameFromForm.value + " " + elNameFromForm.value + " " + elSecondNameFromForm.value;
    }
    elFioChange.style.display = "none";
    displayOn();
}

function changeBirthdayDate () {
    elBirthdayDateChange.style.display = "block";
    displayOff();
}

function saveBirthdayDate (i) {
    if (i) {
        let str = elBirthdayDateFromForm.value.toString();
        elBirthdayDate.innerHTML = str[8] + str[9] + "." + str[5] + str[6] + "." + str[2] + str[3];
    }
    elBirthdayDateChange.style.display = "none";
    displayOn();
}

function changeBlock () {
    elBlockChange.style.display = "block";
    displayOff();
}

function saveBlock (i) {
    if (i) {
        let a="";
        let c = 0;
        for(let i = 0; i < 29; i++) {
            if(document.forms["account_page"].elements[i].checked) {
                let b = document.forms["account_page"].elements[i].value;
                a = a + b + ", ";
                c++;
                if(c === 4) {
                    a = a + "\n";
                    c = 0;
                }
            }
        }
        a = a.substring(0, a.length - 2);
        elBlock.innerHTML = a;
    }
    elBlockChange.style.display = "none";
    displayOn();
}

function changeHobby () {
    elHobbyChange.style.display = "block";
    displayOff();
}

function saveHobby (i) {
    if (i) {
        elHobby.innerHTML = elHobbyFromForm.value;
    }
    elHobbyChange.style.display = "none";
    displayOn();
}

function uploadFromVk () {
    elVkUpload.style.display = "block";
    displayOff();
}

function ajaxGet() {
    $.ajax({
        url: urlForUploadVkInfo,
        method: 'GET',
        success: function (html) {
            elPhoto.src  = $(html).find(".page_avatar_img").attr('src');

            let reg_status = /<span class="current_text">(.+)<\/span><\/span><\/span>/;
            elStatus.innerHTML = html.match(reg_status)[1];

            let reg_fio = /<h2 class="page_name">(.+)<\/h2>/;
            elFio.innerHTML = html.match(reg_fio)[1];

            let reg_dr = /<div class="labeled">(.+)<\/div>/;
            elBirthdayDate.innerHTML = html.match(reg_dr)[1];
        }
    });
}

function saveFromVk(i) {
    if (i) {
        ajaxGet();
    }
    elVkUpload.style.display = "none";
    displayOn();
}


