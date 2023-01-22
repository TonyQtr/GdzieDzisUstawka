function myAction(){
    var name = document.forms["myForm"].elements["name"].value;
    var age = document.forms["myForm"].elements["age"].value;
    var text = "Witaj, " + name + ". Masz "+ age + " lat!";
    document.getElementById("message").innerHTML = text;
}

function logIn(){
    var username = document.getElementById("username".value);
    var password = document.getElementById("password".value);

    for(var i = 0; i < users.length; i++){
        if(username == users[i].username && 
            password == users[i].password){
            alert(username + "jest zalogowany!");
            return;
        }
        else {
            alert("Nieprawidlowy login lub haslo!");
        }
    }
}

var users = [
    {
        username: "Sebastian",
        password: "abcd"
    },
    {
        username: "Krzysztof",
        password: "kti"
    },
    {
        username: "Adam",
        password: "Egzamin"
    }
]

function dodaj(){
    var x = parseFloat(document.getElementById("x".value));
    var y = parseFloat(document.getElementById("y".value));
    alert(x+y)
}