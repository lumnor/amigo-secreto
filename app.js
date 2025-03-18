// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//VARIABLES
let amigos = [];

//FUNCIONES

//capturamos el valor de la caja de texto
function agregarAmigo()
{
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    
    //si no ingresas ningun texto, te sale un alerta
    if(!nombreAmigo)
    {
        alert("Debes ingresar un nombre");
        return;
    }

    //agregamos al array o la lita el nombre de un amigo
    amigos.push(nombreAmigo);

    //despues de ingresar el nombre a la lista, se limpia la caja de texto
    inputAmigo.value = "";

    inputAmigo.focus();

    renderizarAmigos();

    //llamamos al id resultado
    let limpiarResultado = document.getElementById("resultado");
    //limpiamos la caja de texto
    limpiarResultado.innerHTML = "";
}

//funcion donde muestra los amigos agregados
function renderizarAmigos()
{
    //Llamamos al id listaAmigos del index.html
    let listaAmigos = document.getElementById("listaAmigos");

    //limpiamos luego de 
    listaAmigos.innerHTML = "";

    //mientras que el indice sea menor que el tamaño de la lista o Array, incrementar en 1
    for(let i=0; i<amigos.length; i++)
    {        
        //incrementas o creas un li en index.html
        let item = document.createElement("li");

        //dentro del li, llena el nombre del amigo ingresado
        item.textContent = amigos[i];

        //
        listaAmigos.appendChild(item);
    }

}

function sortearAmigo()
{
    //si el tamaño de la lista o array es igual a 0, no hay amigos para sortear
    if(amigos.length == 0)
    {
        alert("No hay amigos para sortear");
        return;
    }

    //Math.random, me da un numero decimal aleatorio
    //Math.floor, redondeamos los decimale del Math.random
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length )];

    //llamamos al id resultado
    let resultado = document.getElementById("resultado");

    //ingresamos el contenido a la caja de texto RESULTADO, el array amigoSorteado
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    //llamamos al id listAmigos
    let limpiarLista = document.getElementById("listaAmigos");

    //limpiamos la caja de texto
    limpiarLista.innerHTML = "";

    //limpiamos la lista de amigos cuando sea sorteado el amigo secreto
    amigos.length = [];



}

