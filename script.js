
// VIDA

let vida = 100;

const sonidoMuerte = new Audio("sonidos/error.bfxr");

function actualizarVida() {

    document.getElementById("vida").style.width = vida + "%";

    document.getElementById("textoVida").innerText =
        vida + " / 100";
}

function cambiarVida(valor) {

    vida += valor;

    if (vida > 100) {
        vida = 100;
    }

    if (vida < 0) {
        vida = 0;
    }

    if (vida === 0 && !muerto) {
        muerto = true;
        sonidoMuerte.play();
        alert("¡Has sido derrotado!");
    }

    if (vida > 0) {
        muerto = false;
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