var users = new Array("user1", "user2", "user3");
var passwords = new Array("kod1", "kod2", "kod3");
function sprawdz_haslo(user, pass) {
    for (var i = 0; i < users.length; i++) {
        if ((user == users[i]) && (pass == passwords[i]))
            return true;
    }
    return false;
}
function check() {
    var user = document.form1.user.value;
    var pass = document.form1.pass.value;
    if (!sprawdz_haslo(user, pass)) {
        alert('Niepoprawne has�o!');
    }
    else {
        document.location.href = "indexLogin.html";
    }
}// JavaScript source code
