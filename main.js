const textoCapturado = document.querySelector(".texto-capturado");
const textoMensaje = document.querySelector(".texto-mostrado");
const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.style.display = "none";

//let textoMostrado = document.querySelector(".texto.mostrado");

function validacionLetras() {
    let capturado = document.querySelector(".texto-capturado").value;
    let validacion = capturado.match(/^[a-z]+$/);
    if (!validacion || validacion === 0) {
        alert("Texto invalido \n Sólo se permiten letras minusculas y sin caracteres especiales");
        location.reload();
        return true;
    }
}

function botonEncriptado() {
    if (!validacionLetras()) {
        const encriptado = encriptacion(textoCapturado.value);
        textoMensaje.value = encriptado;
        textoMensaje.style.backgroundImage = "none";
        textoCapturado.value = "";
        btnCopiar.style.display = "block";
    }
}

function encriptacion(stringEncriptada){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i<matriz.length; i++){
        if(stringEncriptada.includes(matriz[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return stringEncriptada;
}

function botonDesencriptado(){
    const encriptado = desencriptando(textoCapturado.value);
    textoMensaje.value = encriptado;
    textoCapturado.value = "";
}


function desencriptando(stringDesencriptada){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(stringDesencriptada.includes(matriz[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matriz[i][1] , matriz[i][0])

        }

    }
    return stringDesencriptada;
}

function botonCopiado(){
    textoMensaje.select();
    navigator.clipboard.writeText(textoMensaje.value)
    textoMensaje.value = "";
    alert("Se ha copiado el contenido");
}