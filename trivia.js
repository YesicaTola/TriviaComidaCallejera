// Para iniciar la trivia insertando un nombre
function enviar(pagina) {
  var nombre = document.getElementById("nombre").value;

  if (nombre === "") {
    alert("Por favor ingresa tu nombre");
    return;

  }
  document.form.action = pagina;
  document.form.submit();
}

//Para que el botón tenga un sonido
