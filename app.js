// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {

    let nombreAmigo = document.getElementById('amigo').value;

    validacionCampo(nombreAmigo);

    limpiarCaja();

    return;
}


function limpiarCaja() {
    let nombreEnCaja = document.getElementById('amigo').value= '';
}


function validacionCampo(nombre) {

    if (nombre == ''){
        alert('Ingresa un nombre valido');
        return;
    } else {
        amigos.push(nombre);
        //console.log(amigos);
    }

    return;
}