function iniciar(){
    var boton=document.getElementById('obtener');
    boton.addEventListener('click', obtener, false);
}
//function obtener() {
//    navigator.geolocation.getCurrentPosition(exito, errores);
//}

//    function exito(posicion) {
function obtener() {

        document.getElementById('fakeMap').style.visibility = 'visible';
        //var mapurl='https://maps.googleapis.com/maps/api/staticmap?center='+
            //posicion.coords.latitude+','+posicion.coords.longitude+'&zoom=14&size=400x400&key=API_KEY';


    }

 //   function errores(e) {
//     if (e.code == error.PERMISION_DENIED) {
//            alert("El usuario bloqueó el acceso");
//        } else if (e.code == error.POSITION_UNAVAILABLE) {
//            alert("Servicio indisponible temporalmente");
//} else if (e.code == error.TIMEOUT) {
//            alert("Se sobrepasó el tiempo de espera");
//        } else {
//           alert("Error desconocido");
//        }

//}

window.addEventListener("load",iniciar,false) ;
