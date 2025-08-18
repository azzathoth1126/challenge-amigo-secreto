// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista de nombres
let amigos = [];

// Actualiza la lista en pantalla
function actualizarLista() {

    //Selecciona la lista donde agregamos nombres por el id
    let lista = document.getElementById("listaAmigos");

    //limpia la lista
    lista.innerHTML = "";

    //Agrega a la lista los nombres guardados en un arreglo
    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement("li");
         nuevoElemento.textContent = amigos[i];
         lista.appendChild(nuevoElemento);
    }

    return;
}


// Agrega nombres a la lista
function agregarAmigo() {
    
    //Toma el nombre de la caja que identifica con el id
    let nombreAmigo = document.getElementById('amigo').value;

    //Llama a la función validacionCampo enviando como parametro el nombre en la caja
    validacionCampo(nombreAmigo);

    //Limpia la caja donde escriben nombres
    let nombreEnCaja = document.getElementById('amigo').value= '';

    return;
}


// Valida si efectivamente es un nombre y no esta vacia la caja de nombres
function validacionCampo(nombre) {

    //Verica que no sea una cadena vacia
    if (nombre == ''){
        //Envia una alerta para que escriba un nombre
        alert('Ingresa un nombre valido');
        return;

    } else {
        //Agrea el nombre a la lista y la actualiza en pantalla
        //console.log(amigos);
        amigos.push(nombre);
        actualizarLista();

    }

    return;
}
