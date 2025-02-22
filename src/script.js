let contador = 0;

const numeroContador = document.querySelector("#numero-contador");
const btnAumentar = document.querySelector("#boton-aumentar");
const btnDisminuir = document.querySelector("#boton-disminuir");
const btnReset = document.querySelector("#boton-reiniciar");

btnAumentar.addEventListener("click", function () {
  contador++;
  numeroContador.textContent = contador; 
});

btnDisminuir.addEventListener("click", function () {
  contador--;
  numeroContador.textContent = contador;
});

btnReset.addEventListener("click", function () {
  contador = 0;
  numeroContador.textContent = "0";
});
