let valor = 0;

const valorElemento = document.getElementById("valor");
const mas = document.getElementById("mas");
const menos = document.getElementById("menos");

mas.addEventListener("click", () => {
  valor++;
  valorElemento.textContent = valor;
});

menos.addEventListener("click", () => {
  valor--;
  valorElemento.textContent = valor;
});
