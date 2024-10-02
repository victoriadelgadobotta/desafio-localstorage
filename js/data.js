document.addEventListener("DOMContentLoaded", () => {
let data = document.getElementById("data");
let datosGuardados = localStorage.getItem("datosIngresados");

if (datosGuardados) {
    data.textContent = datosGuardados;
} else {
    data.textContent = "Por el momento no tenemos datos para mostrar, regrese mas tarde!";
    data.style.color = "red";
}
});