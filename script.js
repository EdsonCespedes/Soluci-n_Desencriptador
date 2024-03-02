const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(palabra){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    palabra = palabra.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(palabra.includes(matrizCodigo[i][0])){
            palabra = palabra.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return palabra
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";

}

function desencriptar(palabra){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    palabra = palabra.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(palabra.includes(matrizCodigo[i][1])){
            palabra = palabra.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return palabra
}

/* function copiar() {
    const mensajeTextarea = document.querySelector('.mensaje');
    mensajeTextarea.select();
    document.execCommand('copy');
} */

function copiar() {
    const mensajeTextarea = document.querySelector('.mensaje');
     navigator.clipboard.writeText(mensajeTextarea.value);
     alert('Texto copiado al portapapeles.');
  
}

function limpiar(){
    mensaje.value = "";
}


