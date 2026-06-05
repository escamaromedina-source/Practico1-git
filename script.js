
// VIDA

let vida = 100;

const sonidoMuerte = new Audio("sonidos/error.mp3");

function actualizarVida() {

    document.getElementById("vida").style.width = vida + "%";

    document.getElementById("textoVida").innerText =
        vida + " / 100";
}

function cambiarVida(valor) {

let vidaActual = 100;

const sonidoMuerte = new Audio("sonidos/game-over.mp3");

function cambiarVida(cantidad) {

    vidaActual += cantidad;

    if (vidaActual > 100) {
        vidaActual = 100;
    }

    if (vidaActual < 0) {
        vidaActual = 0;
    }

    document.getElementById("textoVida").textContent =
        vidaActual + " / 100";

    document.getElementById("vida").style.width =
        vidaActual + "%";

    if (vidaActual === 0) {
        sonidoMuerte.play();
        alert("¡Game Over!");
    }


    actualizarVida();
}

// DADOS

function tirarDado(lados) {

    const resultado =
        Math.floor(Math.random() * lados) + 1;

    document.getElementById("resultadoDado").innerText =
        "Resultado: " + resultado;
}

// INVENTARIO

function agregarObjeto() {

    const input =
        document.getElementById("objeto");

    const texto = input.value;

    if (texto === "") {
        return;
    }

    const li =
        document.createElement("li");

    li.innerText = texto;
    
    li.onclick = function() {
    li.remove();
    };

    document.getElementById("inventario")
        .appendChild(li);

    input.value = "";
}

actualizarVida();