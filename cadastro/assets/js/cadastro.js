function Entrar() {
  var usuario = document.getElementsByName("username")[0].value;
  var senha = document.getElementsByName("password")[0].value;
  var senhaDois = document.getElementById("passwordConfirmar").value;

  if (usuario === "oimatth_" && senha === "1704" && senhaDois === "1704") {
    window.location = "../../login/login.html";
  } else {
    alert("Dados incorretos");
  }
}
