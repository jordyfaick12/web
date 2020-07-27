window.onload = inicializar;
var formAutenticacion;



function inicializar(event){
 
  formAutenticacion = document.getElementById('form-autenticacion');
  formAutenticacion.addEventListener("submit", autentificar, false);
}

function autentificar(event){

  event.preventDefault();
  var usuario = event.target.email.value;
  var contrasena = event.target.password.value;
  firebase.auth().signInWithEmailAndPassword(usuario, contrasena)
  .then(function(result){
    window.location.href = "PerfilUsuario.html";
  })
  .catch(function(error) {
    alert("No se puso iniciar Sesión - Usuario o contraseña incorrecto");

});

}
