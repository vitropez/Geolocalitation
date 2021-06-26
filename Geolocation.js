//creamos la funcion que contiene un manejador de eventos al hacer click en el botón
// se activa la otra función para obtener las coordenadas de mi ubicación
function iniciar(){
    var boton=document.getElementById('obtener');
    boton.addEventListener('click', obtener, false);
}
//en esta función se obtine el objeto con las coordenas y otras dimensiones de la geolocalización
function obtener() {
   navigator.geolocation.getCurrentPosition(exito, error);
}
//si se obtienen las coordenadas podemos añadirlas a la url del mapa
//y mostrarlo por pantalla en una etiqueta frame
//también añadimos las coordenadas a la tabla de la izquierda
    function exito(posicion){

    var mapaURL_1 = 'http://maps.google.com/maps?hl=es&ie=UTF8&q=' +posicion.coords.latitude + ',' + posicion.coords.longitude + '&z=14&output=embed';


        document.getElementById('map').src = mapaURL_1;

    document.getElementById('coordenadas1').innerHTML = posicion.coords.latitude;
        document.getElementById('coordenadas2').innerHTML = posicion.coords.longitude;





    }
//si hubiera errores se mostrarian por pantalla
    function error(e) {
    console.log(e.code)
    if (e.code ==1) {
        alert("El usuario bloqueó el acceso");
    }
    else if(e.code ==2 ){
            alert("Servicio indisponible temporalmente");
} else if (e.code == 3) {
            alert("Se sobrepasó el tiempo de espera");
       } else {
           alert("Error desconocido");
        }

}
//hacemos que el script se ejecute al terminar de cargar la página
window.addEventListener("load",iniciar,false) ;
