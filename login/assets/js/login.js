function Entrar() {
  var done = 0;
  var usuario = document.getElementsByName("username")[0].value;
  usuario = usuario.toLowerCase();
  var senha = document.getElementsByName("password")[0].value;

  if (usuario == "oimatth_" && senha == "1704") {
    window.location = "../pagina.html";
    done = 1;
  }
  
  if (done == 0) {
    alert("Dados incorretos, tente novamente");
  }
}