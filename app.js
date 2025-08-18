// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    
    let nuevoElemento = document.createElement("li");

    nuevoElemento.textContent = amigos[amigos.length - 1];

    lista.appendChild(nuevoElemento);

    return;
}


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
        console.log(amigos);
        actualizarLista();
    }

    return;
}