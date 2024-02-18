// Fecha objetivo (3 de Abril de 2024)
var fechaObjetivo = new Date("2024-04-03");

// Función para actualizar el contador
function actualizarContador() {
  // Fecha y hora actuales en cada llamada
  var fechaActual = new Date();

  // Diferencia en milisegundos entre las dos fechas
  var diferencia = fechaObjetivo - fechaActual;

  // Calcula los días, horas, minutos y segundos
  var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Muestra el contador en el elemento con ID "contador"
  document.getElementById("fecha").innerHTML =
    dias +
    " días, " +
    horas +
    " horas, " +
    minutos +
    " minutos, " +
    segundos +
    " segundos";
}

// Actualiza el contador cada segundo
setInterval(actualizarContador, 1000);
    