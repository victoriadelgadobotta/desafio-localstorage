document.addEventListener("DOMContentLoaded", () => {
    let campoTexto = document.getElementById("inputText");
    let boton = document.getElementById("buttonText");

    boton.addEventListener("click", function(){
        let datoIngresado = campoTexto.value;
        localStorage.setItem("datosIngresados", datoIngresado);
        campoTexto.value = "";
    });
});