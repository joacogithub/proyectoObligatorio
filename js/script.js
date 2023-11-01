
let sistema = new Sistema();

sistema.precargarDatos();

document.querySelector('#btnRegistro').addEventListener('click', registrarUsuario);
document.querySelector('#aRegistrarse').addEventListener('click', cargarRegistro);
document.querySelector('#aIngresar').addEventListener('click', cargarInicioSesion);
document.querySelector('#aMaquinas').addEventListener('click', cargarSeleccionMaquinas);
document.querySelector('#aInstanciasAlquiladas').addEventListener('click', cargarInstanciasAlquiladas);
document.querySelector('#aSeccionCostes').addEventListener('click', cargarSeccionCostes);
document.querySelector('#aGestionUsuarios').addEventListener('click', cargarGestionUsuarios);
document.querySelector('#aSeccionInformes').addEventListener('click', cargarSeccionInformes);
document.querySelector('#aGestionStock').addEventListener('click', cargarGestionStock);

cargarInicioSesion();

/**
 *  Se pasa como parámetro el id del div correspondiente a la sección a cargar.
 *  Recorre todas y oculta todas las secciónes menos la deseada.
 * @param {String} idPag
 */
function cargarPag(idPag) {
  let paginas = document.querySelectorAll('.seccionPagina');
  for (let i = 0; i < paginas.length; i++) {
    paginas[i].style.display = 'none';
  }
  document.querySelector(idPag).style.display = 'block';
}

/**
 * Muestra la página de registro
 */
function cargarRegistro() {
  cargarPag('#seccionRegistro');
}

/**
 * Muestra la página de inicio de sesión
 */
function cargarInicioSesion() {
  cargarPag('#seccionInicioSesion');
}

function cargarSeleccionMaquinas() {
  cargarPag('#seccionElegirMaquinas');
}

function cargarInstanciasAlquiladas() {
  cargarPag('#seccionInstanciasAlquiladas');
}

function cargarSeccionCostes() {
  cargarPag('#seccionCostes');
}

function cargarGestionUsuarios() {
  cargarPag('#seccionGestionDeUsuarios');
}

function cargarGestionStock() {
  cargarPag('#seccionGestionStock');
}

function cargarSeccionInformes() {
  cargarPag('#seccionInformes');
}

function registrarUsuario() {
  let nombre = document.querySelector('#txtNombre').value;
  let apellido = document.querySelector('#txtApellido').value;
  let nombreDeUsuario = document.querySelector('#txtNombreUsuario').value;
  let contraseña = document.querySelector('#txtContraseña').value;
  let tarjeta = document.querySelector('#txtTarjeta').value;
  let cvc = document.querySelector('#txtCvc').value;

  let errores = ""

  if (esVacio(nombre) ) {

  }
}

function esVacio(texto) {
return texto.trim() = ""
}

function soloContieneLetras(texto) {
  let soloLetras = true
  while (i < texto.trim().length && soloLetras) {
    
  }
}

