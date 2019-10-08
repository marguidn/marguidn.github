function muestraFraseFecha() {
    var saludo = "Hola visitante ";
    document.getElementById('fecha').innerHTML= saludo + Date();
}

function toCelsius(farenheint) {
return (5/9) * (farenheint-32);
}