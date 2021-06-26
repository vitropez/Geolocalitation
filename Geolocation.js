
function iniciar(){
    var boton=document.getElementById('obtener');
    boton.addEventListener('click', obtener, false);
}
function obtener() {
   navigator.geolocation.getCurrentPosition(exito, errores);
}

    function exito(posicion){

    var mapaURL_1 = 'http://maps.google.com/maps?hl=es&ie=UTF8&q=' +posicion.coords.latitude + ',' + posicion.coords.longitude + '&z=14&output=embed';


        document.getElementById('map').src = mapaURL_1;

    document.getElementById('coordenadas1').innerHTML = posicion.coords.latitude;
        document.getElementById('coordenadas2').innerHTML = posicion.coords.longitude;





    }
    function errores(e) {
    if (e.code == error.PERMISION_DENIED) {
           alert("El usuario bloqueó el acceso");
            alert("Servicio indisponible temporalmente");
} else if (e.code == error.TIMEOUT) {
            alert("Se sobrepasó el tiempo de espera");
       } else {
           alert("Error desconocido");
        }

}

window.addEventListener("load",iniciar,false) ;
