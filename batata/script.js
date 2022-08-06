function logar()
var login = document.getElementById("login").value;

var senha = document.getElementById("senha").value;

if(login =="Kauan" && senha == "adm0"){
    alert("Login realizado com sucesso! :D");
location.ref="1 login.html";
}else{
    alert("Usuário ou senha incorretos!");
}