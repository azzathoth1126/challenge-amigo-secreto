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

    } else if (repetidos(nombre)) {
        //console.log(amigos);

        amigos.push(nombre);
        actualizarLista();

    }

    return;
}


function repetidos(nombre) {
    for (let i = 0; i < amigos.length; i++){
        if (nombre == amigos[i]) {
            alert('Nombre duplicado.');
            return false;
        }
    }

    return true;
}