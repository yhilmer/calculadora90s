var campos = {};
var errores = {};
var errorValidacion = "";

document.addEventListener("DOMContentLoaded", function () {
  campos.nombre = document.getElementById("nombre");
  campos.apellido = document.getElementById("apellido");
  campos.email = document.getElementById("email");
  campos.calle = document.getElementById("calle");
  campos.altura = document.getElementById("altura");
  campos.pais = document.getElementById("pais");
});

function isNotEmpty(value) {
  if (!!value) return true;
  return false;
}

function isEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function isNumber(num) {
  return num.length > 0 && !isNaN(num);
}

function validacionCampo(campo, validationFunction) {
  if (campo == null) return false;

  let iscampoValid = validationFunction(campo.value);
  if (!iscampoValid) {
    campo.className = "placeholderRed";
  } else {
    campo.className = "";
  }

  return iscampoValid;
}

function isValid() {
  var valid = true;

  errores.nombre = "Debe ingresar el nombre";
  errores.apellido = "Debe ingresar el apellido";
  errores.calle = "Debe ingresar la calle";
  errores.pais = "Debe ingresar el pais";
  errores.email = "Debes ingresar un email válido";
  errores.altura = "Debe ingresar la altura en números";

  if (!validacionCampo(campos.nombre, isNotEmpty))
    errorValidacion += "\n" + errores.nombre;
  if (!validacionCampo(campos.apellido, isNotEmpty))
    errorValidacion += "\n" + errores.apellido;
  if(!validacionCampo(campos.calle, isNotEmpty))
    errorValidacion += "\n" + errores.calle;
  if(!validacionCampo(campos.pais, isNotEmpty))
    errorValidacion += "\n" + errores.pais;
  if(!validacionCampo(campos.email, isEmail))
    errorValidacion += "\n" + errores.email;
  if(!validacionCampo(campos.altura, isNumber))
    errorValidacion += "\n" + errores.altura;


  valid &= validacionCampo(campos.nombre, isNotEmpty);
  valid &= validacionCampo(campos.apellido, isNotEmpty);
  valid &= validacionCampo(campos.calle, isNotEmpty);
  valid &= validacionCampo(campos.pais, isNotEmpty);
  valid &= validacionCampo(campos.email, isEmail);
  valid &= validacionCampo(campos.altura, isNumber);

  return valid;
}

class User {
  constructor(nombre, apellido, calle, pais, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.calle = calle;
    this.pais = pais;
    this.email = email;
  }
}

function sendContact() {
  if (isValid()) {
    let usr = new User(
      nombre.value,
      apellido.value,
      calle.value,
      pais.value,
      email.value
    );
    alert(`${usr.nombre} ${usr.apellido} fue creado satisfactoriamente`);
  } else {
    alert(
      `Error al crear el usuario, falta(n) la(s) siguiente(s) validacion(es): ${errorValidacion}`
    );
  }
}
