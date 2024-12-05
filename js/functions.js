var estado = false;
var intentos = 0;
var backcolor="magenta";
var line="20px";
function turno(boton) {
    boton.disabled = true;
    boton.value = !estado ? "X" : "O";
    document.getElementById("mensaje").innerHTML = estado ? "Turno X" : "Turno O";
    estado = !estado;
    verificar();
}

function desactivar() {
    document.querySelectorAll("input[type='button']").forEach(boton => { boton.disabled = true; });
}

function verificar() {
    if (++intentos == 9) {
        document.getElementById("mensaje").innerHTML = "Empate";
    }
    var botones = document.querySelectorAll("input[type='button']");
    const estilo = document.createElement("style");


    if (botones[0].value == botones[1].value && botones[1].value == botones[2].value && botones[0].value != "") {
        desactivar()
        estilo.textContent = `tr:nth-child(1)::after{
            content: "";
            position: absolute;
            top: 50%;
            transform:translateY(-50%);
            left: 0;
            right: 0;
            height: ${line};
            background-color: ${backcolor};
            z-index: 1;
            pointer-events: none;
        }`;

        document.getElementById("mensaje").innerHTML = `Gana ${botones[0].value}`;
        desactivar();
    }
    else if (botones[3].value == botones[4].value && botones[4].value == botones[5].value && botones[3].value != "") {
        estilo.textContent = `tr:nth-child(2)::after{
            content: "";
            position: absolute;
            top: 50%;
            transform:translateY(-50%);
            left: 0;
            right: 0;
            height: ${line};
            background-color: ${backcolor};
            z-index: 1;
            pointer-events: none;
        }`;
        document.getElementById("mensaje").innerHTML = `Gana ${botones[3].value}`;
        desactivar();
    }
    else if (botones[6].value == botones[7].value && botones[7].value == botones[8].value && botones[6].value != "") {
        estilo.textContent = `tr:nth-child(3)::after{
            content: "";
            position: absolute;
            top: 50%;
            transform:translateY(-50%);
            left: 0;
            right: 0;
            height: ${line};
            background-color: ${backcolor};
            z-index: 1;
            pointer-events: none;
        }`;
        document.getElementById("mensaje").innerHTML = `Gana ${botones[6].value}`;
        desactivar();
    }
    else if (botones[0].value == botones[3].value && botones[3].value == botones[6].value && botones[0].value != "") {
        estilo.textContent = `td:nth-child(1)::after{
            content: "";
            position: absolute;
            top: -1px;
            bottom: -1px;
            left:50%;
            transform:translateX(-50%);
            width: ${line};
            background-color: ${backcolor};
            z-index: 1;
            pointer-events: none;
        }`;
        document.getElementById("mensaje").innerHTML = `Gana ${botones[0].value}`;
        desactivar();
    }
    else if (botones[1].value == botones[4].value && botones[4].value == botones[7].value && botones[1].value != "") {
        estilo.textContent = `td:nth-child(2)::after{
            content: "";
            position: absolute;
            top: -1px;
            bottom: -1px;
            left:50%;
            transform:translateX(-50%);
            width: ${line};
            background-color: ${backcolor};
            z-index: 1;
            pointer-events: none;
        }`;
        document.getElementById("mensaje").innerHTML = `Gana ${botones[1].value}`;
        desactivar();
    }
    else if (botones[2].value == botones[5].value && botones[5].value == botones[8].value && botones[2].value != "") {
        estilo.textContent = `td:nth-child(3)::after{
            content: "";
            position: absolute;
            top: -1px;
            bottom: -1px;
            left:50%;
            transform:translateX(-50%);
            width: ${line};
            background-color: ${backcolor};
            z-index: 1;
            pointer-events: none;
        }`;
        document.getElementById("mensaje").innerHTML = `Gana ${botones[2].value}`;
        desactivar();
    }
    else if (botones[0].value == botones[4].value && botones[4].value == botones[8].value && botones[0].value != "") {
        estilo.textContent = `table::after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: calc(100%*1.414);
            height: calc(100%*1.414);
            border-top: ${line} solid ${backcolor};
            transform: rotate(45deg);
            transform-origin: top left;
            z-index: 1;
            pointer-events: none;
        }`;
        document.getElementById("mensaje").innerHTML = `Gana ${botones[0].value}`;
        desactivar();
    }
    else if (botones[2].value == botones[4].value && botones[4].value == botones[6].value && botones[2].value != "") {
        estilo.textContent = `table::after{
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: calc(100%*1.414);
            height: calc(100%*1.414);
            border-top: ${line} solid ${backcolor};
            transform: rotate(-45deg);
            transform-origin: top right;
            z-index: 1;
            pointer-events: none;
        }`;
        document.getElementById("mensaje").innerHTML = `Gana ${botones[2].value}`;
        desactivar();
    }
    document.head.appendChild(estilo);
}

function reiniciar(){
    window.location.reload();
}