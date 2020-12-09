var d = new Date();
document.getElementById("date").innerHTML = d.toLocaleDateString();

var t = new Date();
document.getElementById("time").innerHTML = t.toLocaleTimeString();

function validateRadios(radios) {
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;
    }

    if (!formValid) alert("Must check some option for gender!");
    return formValid;
}

function validateName(name) {
    if (name == null || name == "" || name.length < 2) {
        document.getElementById('error-name').innerHTML = "Error";
        return false;
    }
    return true;
}

function validateLastname(lastname) {
    if (lastname == null || lastname == "" || lastname.length < 2) {
        document.getElementById('error-lastname').innerHTML = "Error";
        return false;
    }
    return true;
}

function validateMail(mail) {
    var atposition = mail.indexOf("@");
    var dotposition = mail.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= mail.length) {
        document.getElementById('error-email').innerHTML = " Please enter valid e-mail"
        return (false);
    }
    return true;
}

function validateForm() {
    document.getElementById("error-name").innerHTML = "";
    document.getElementById("error-lastname").innerHTML = "";
    document.getElementById("error-email").innerHTML = "";

    var name = document.myform.name.value;
    if (!validateName(name)) {
        return (false);
    }

    var lastname = document.myform.lastname.value;
    if (!validateLastname(lastname)) {
        return (false);
    }

    var mail = document.myform.email.value;
    if (!validateMail(mail)) {
        return (false);
    }

    var radios = document.getElementsByName("gender");
    if (!validateRadios(radios)) {
        return (false);
    }
    
    alert("Message sent! We will answer you ASAP")

    return (true);
}