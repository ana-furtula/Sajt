
$(".accordion").accordion({
    active: false,
    collapsible: true,
});

function validateform() {
    document.getElementById('success').innerHTML = "";
    document.getElementById('error-name').innerHTML = "";
    document.getElementById('error-mail').innerHTML = "";
    var ime = document.myform.name.value;
    if (ime == null || ime == "" || ime.length < 2) {
        document.getElementById('error-name').innerHTML = " Please enter your name"
        return (false);
    } else {
        var x = document.myform.email.value;
        var atposition = x.indexOf("@");
        var dotposition = x.lastIndexOf(".");
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
            document.getElementById('error-mail').innerHTML = " Please enter valid email"
            return (false);
        }
        document.getElementById('success').innerHTML = "Thank you!"

        var form = document.getElementById("formID");
        var elements = form.elements;
        for (var i = 0, len = elements.length; i < len; ++i) {
            elements[i].readOnly = true;
        }

        $(".newsletter").animate({
            backgroundColor: "#7CFC00",
            opacity: .5
        });
        return (false);
    }
}
